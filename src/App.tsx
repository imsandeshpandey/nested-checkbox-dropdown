import ReactDOM, { createRoot } from 'react-dom/client'
import mockData from './mockData'
import { Checkbox } from './components/ui/checkbox'

import { flattenTree, useNestedDropdown } from './hooks/use-nested-checkbox'
import { TreeNode } from './hooks/use-nested-checkbox.types'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuItem,
} from './components/ui/dropdown-menu'
import { Button } from './components/ui/button'
import './App.css'
import { ChevronDown } from 'lucide-react'
import { Badge } from './components/ui/badge'
import { ChipContainer } from './components/chip-container'

const BADGE_STYLES: Record<string, string> = {
  company: 'bg-rose-200',
  location: 'bg-yellow-200',
  subsidiary: 'bg-blue-200',
  businessFacility: 'bg-emerald-200',
}

const App = () => {
  console.count('App')
  const { relations, stateMap, flattenedNodes } = flattenTree(
    [mockData],
    'children'
  )

  const { selected, state, toggleNode } = useNestedDropdown(stateMap, relations)

  const renderCheckbox = (id: string, label: string) => {
    return (
      <div className="flex gap-2 items-center">
        <Checkbox
          onClick={(e) => {
            e.stopPropagation()
          }}
          id={id}
          checked={state[id]}
          onCheckedChange={() => toggleNode(id)}
        />
        <label
          onClick={(e) => e.stopPropagation()}
          className="select-none cursor-pointer "
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    )
  }

  const renderData = <
    T extends Array<TreeNode & { [key in N]: string }>,
    N extends string = 'name',
  >(
    tree: T,
    nameKey: N = 'name' as N
  ) => {
    return (
      <>
        <DropdownMenuLabel className="capitalize-first">
          {tree[0]['category' as 'id']}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {tree.map((data) => {
          if (!data.children.length) {
            return (
              <DropdownMenuItem key={data.id}>
                {renderCheckbox(data.id, data[nameKey])}
              </DropdownMenuItem>
            )
          }

          return (
            <DropdownMenuSub key={data.id}>
              <DropdownMenuSubTrigger>
                {renderCheckbox(data.id, data[nameKey])}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {renderData(data.children as T, nameKey)}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          )
        })}
      </>
    )
  }

  return (
    <>
      <Badge
        id="root-badge-element"
        className="fixed top-1/2 left-1/2"
        children="+1"
      />
      <h1 className=" font-bold text-2xl m-2">Selected Companies</h1>
      <ChipContainer
        items={[...selected].map((id) => flattenedNodes[id]?.name || 'All')}
      />
      <br />
      <DropdownMenu>
        <Button
          variant="secondary"
          className=" rounded-sm pr-0 gap-10 w-fit flex justify-between"
        >
          {renderCheckbox('tree_root', 'All')}
          <DropdownMenuTrigger asChild>
            <div className="flex px-2">
              Select Companies <ChevronDown className="ml-2 text-white/50" />
            </div>
          </DropdownMenuTrigger>
        </Button>
        <DropdownMenuContent>{renderData([mockData])}</DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default App

export const getWidth = (chipText: string) => {
  const chip = document.getElementById('root-badge-element')!
  chip.innerText = chipText
  return chip.offsetWidth + 8
}
