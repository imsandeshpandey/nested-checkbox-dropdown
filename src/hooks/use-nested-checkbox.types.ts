export type TriState = boolean | "indeterminate";

export type TreeNode<K extends string = "children"> = {
  id: string;
} & {
  [children in K]: TreeNode<K>[];
};

export type FlattenedNode<
T extends TreeNode<K>,
K extends string = "children",
> = Omit<T, K>;

export type Relations = {
  parentId: string ;
  ancestorsIds: Set<string>;
  descendantsIds: Set<string>;
  childrenIds: Set<string>;
};

export type FlattenedNodes<
  T extends TreeNode<K>,
  K extends string,
> = {
  [id: string]: FlattenedNode<T, K>;
};

export type ArrOrObj<T> = T | T[]
