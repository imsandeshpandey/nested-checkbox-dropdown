import { useState } from "react";
import {
  ArrOrObj,
  FlattenedNodes,
  Relations,
  TreeNode,
  TriState,
} from "./use-nested-checkbox.types";

export const useNestedDropdown = (
  stateMap: Record<string, TriState>,
  relations: Record<string, Relations>
) => {
  const [state, setState] = useState(stateMap);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleNode = (id: string) => {
    const newState = { ...state };
    const currentState = newState[id];
    const newNodeState = !currentState;
    newState[id] = newNodeState;

    const newSelected = new Set([...selected]);
    newNodeState ? newSelected.add(id) : newSelected.delete(id);

    for (let desc of relations[id].descendantsIds) {
      newState[desc] = newNodeState;
      newSelected.delete(desc);
    }

    const parentId = relations[id].parentId;
    const siblings = [...(relations[parentId]?.childrenIds || [])];

    const allSiblingsSelected = siblings.every((sib) => newState[sib] === true);

    if (newNodeState === true) {
      if (allSiblingsSelected) {
        for (let sib of siblings) newSelected.delete(sib);
      }
    } else {
      for (let sib of siblings) newState[sib] && newSelected.add(sib);
    }

    updateAncestors(id, newState, relations, newSelected);

    setSelected(newSelected);

    setState(newState);
  };

  const updateAncestors = (
    id: string,
    newState: { [x: string]: TriState },
    relations: { [x: string]: Relations },
    newSelected: Set<string>
  ) => {
    const ancestors = [...relations[id].ancestorsIds];
    let selectedAncestor = "";

    for (let i = ancestors.length - 1; i >= 0; i--) {
      const id = ancestors[i];
      const childrenIds = relations[id].childrenIds;

      const state = getParentState(childrenIds, newState);
      newState[id] = state;

      const parentId = relations[id].parentId;
      const siblings = [...(relations[parentId]?.childrenIds || [])];

      if (state === true) {
        //Overriding selectedAncestor for higher level ANCESTORS
        selectedAncestor = id;
        //Check and remove if all siblings are selected(Only PARENT will be added)
        const allSelected = siblings.every((sib) => newState[sib] === true);
        if (allSelected) {
          for (let sib of siblings) newSelected.delete(sib);
        }
      } else {
        //Remove the current node ID from selected set.
        newSelected.delete(id);
        //Add rest of the SIBLINGS since one of them is *false*.
        for (let sib of siblings)
          newState[sib] === true && newSelected.add(sib);
      }
    }
    //Add the highest level ANCESTOR.
    selectedAncestor && newSelected.add(selectedAncestor);
  };

  return { selected, state, toggleNode };
};

const getParentState = (
  childrenIds: Set<string>,
  newState: { [x: string]: TriState }
) => {
  const stateSet = new Set<TriState>();

  for (let id of childrenIds) {
    stateSet.add(newState[id]);
    if (stateSet.size > 1) return "indeterminate";
  }
  return stateSet.values().next().value;
};

export function flattenTree<T extends TreeNode<K>, K extends string>(
  tree: ArrOrObj<T>,
  childrenKey: K,
  parentId: string = "tree_root",
  ancestorsIds: Set<string> = new Set<string>(["tree_root"]),
  flattenedNodes: FlattenedNodes<T, K> = {},
  stateMap: { [x: string]: TriState } = {},
  relations: { [x: string]: Relations } = {}
) {
  if (Array.isArray(tree)) {
    const tree_root = {
      parentId: "",
      ancestorsIds: new Set<string>(),
      childrenIds: new Set<string>(),
      descendantsIds: new Set<string>(),
    };
    for (let node of tree) {
      flattenTree(
        node,
        childrenKey,
        parentId,
        ancestorsIds,
        flattenedNodes,
        stateMap,
        relations
      );
      tree_root.descendantsIds = new Set([
        ...tree_root.descendantsIds,
        ...relations[node.id].descendantsIds,
        node.id,
      ]);
      tree_root.childrenIds.add(node.id);
    }
    relations.tree_root = tree_root;

    return { flattenedNodes, stateMap, relations };
  } else {
    const { [childrenKey]: children, ...rest } = tree;

    const childrenIds = new Set(children?.map((child) => child.id) ?? []);
    let descendantsIds = new Set<string>(childrenIds);

    const currentAncestorsIds = new Set(ancestorsIds);
    parentId && currentAncestorsIds.add(parentId);

    flattenedNodes[tree.id] = rest;
    stateMap[tree.id] = false;
    relations[tree.id] = {
      parentId,
      ancestorsIds: currentAncestorsIds,
      descendantsIds,
      childrenIds,
    };

    if (tree[childrenKey]) {
      for (let node of tree[childrenKey]) {
        const {
          flattenedNodes: updatedFlattenedNodes,
          stateMap: updatedStateMap,
          relations: updatedRelations,
        } = flattenTree(
          node as T,
          childrenKey,
          tree.id,
          currentAncestorsIds,
          flattenedNodes,
          stateMap,
          relations
        );

        const nodeDescendantsIds = updatedRelations[node.id].descendantsIds;
        descendantsIds = new Set([
          ...descendantsIds,
          ...nodeDescendantsIds,
          node.id,
        ]);

        flattenedNodes = updatedFlattenedNodes;
        stateMap = updatedStateMap;
        relations = updatedRelations;
      }

      relations[tree.id].descendantsIds = descendantsIds;
    }
  }

  return { flattenedNodes, stateMap, relations };
}
