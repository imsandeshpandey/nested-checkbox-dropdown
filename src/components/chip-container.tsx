import { Badge } from './ui/badge'
import { debounce } from '../lib/utils'
import { useEffect, useRef, useState } from 'react'
import { getWidth } from '../App'

export const ChipContainer: React.FC<{ items: string[] }> = (props) => {
  const items = useRef(props.items)
  const [visibleChips, setVisibleChips] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    items.current = props.items
    calculateVisibleChips()
  }, [props.items])

  useEffect(() => {
    const handleResize = debounce(calculateVisibleChips, 100)
    window.addEventListener('resize', () => handleResize())
    return () => window.removeEventListener('resize', () => handleResize())
  }, [])

  const calculateVisibleChips = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0
    let totalWidth = 0

    const currVisibleChips = []
    const remainingChips = [...items.current]

    while (remainingChips.length > 0) {
      const chip = remainingChips[0]
      const chipWidth = getWidth(chip)

      if (totalWidth + chipWidth + 32 > containerWidth) {
        const remainingChipsCount = remainingChips.length
        if (remainingChipsCount > 0) {
          const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
          if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
            currVisibleChips.pop()
            currVisibleChips.push(`+${remainingChipsCount + 1}`)
            break
          }
          currVisibleChips.push(`+${remainingChipsCount}`)
        }
        break
      }

      currVisibleChips.push(chip)
      totalWidth += chipWidth
      remainingChips.shift()
    }

    setVisibleChips(currVisibleChips)

    console.log({ totalWidth, containerWidth })
  }

  return (
    <div
      ref={containerRef}
      className="w-[50%] px-4 h-fit py-2 min-h-12 box-border border-2 border-border"
    >
      <div className="flex gap-2 items-center">
        {visibleChips.map((chip, index) => (
          <Badge className="shrink whitespace-nowrap" key={index}>
            {chip}
          </Badge>
        ))}
      </div>
    </div>
  )
}
