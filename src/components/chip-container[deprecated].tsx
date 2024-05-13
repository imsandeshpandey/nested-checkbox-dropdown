// import { debounce } from '@/lib/utils'
// import { useEffect, useRef, useState } from 'react'
// import { getElementWidth as getWidth } from '@/lib/utils'
// import { Badge } from './ui/badge'

import { getWidth } from '@/App'
import {
  useEffect,
  //     const newVisible = [...visibleChips]
  //     while (newTotalWidth > containerWidth) {}
  //   }
  //   const addItem = (item: string) => {
  //     items.current.add(item)
  //     const newVisibleChips = [...visibleChips]
  //     const containerWidth = containerRef.current?.offsetWidth || 0
  //     const newTotalWidth = totalWidth + getWidth(item)
  //     setTotalWidth(newTotalWidth)
  //     if (totalWidth + 32 > containerWidth) {
  //       const remainingChipsCount = items.current.size - newVisibleChips.length
  //       newVisibleChips.pop()
  //       newVisibleChips.push(`+${remainingChipsCount}`)
  //       setVisibleChips(newVisibleChips)
  //       return
  //     }
  //     if (newTotalWidth + 32 > containerWidth) {
  //       const remainingChipsCount = items.current.size - newVisibleChips.length
  //       if (remainingChipsCount > 0) {
  //         const numberedChipWidth = getWidth(`${remainingChipsCount}`)
  //         if (totalWidth + numberedChipWidth + 32 > containerWidth) {
  //           newVisibleChips.pop()
  //           newVisibleChips.push(`+${remainingChipsCount + 1}`)
  //         } else {
  //           newVisibleChips.push(`+${remainingChipsCount}`)
  //         }
  //       }
  //     } else {
  //       newVisibleChips.push(item)
  //     }
  //     console.log({ newVisibleChips })
  //     setVisibleChips(newVisibleChips)
  //   }
  //   const removeItem = (item: string) => {
  //     items.current.delete(item)
  //     let newVisibleChips = [...visibleChips]
  //     const containerWidth = containerRef.current?.offsetWidth || 0
  //     const newTotalWidth = totalWidth - getWidth(item)
  //     setTotalWidth(newTotalWidth)
  //     if (totalWidth + 32 <= containerWidth) {
  //       newVisibleChips = newVisibleChips.filter((i) => i != item)
  //       console.log(newVisibleChips)
  //       setVisibleChips(newVisibleChips)
  //     }
  //   }
  //   //   useEffect(() => {
  //   //     items.current = props.items;
  //   //     calculateVisibleChips();
  //   //   }, [props.items]);
  //   //   useEffect(() => {
  //   //     const handleResize = debounce(calculateVisibleChips, 100)
  //   //     window.addEventListener('resize', () => handleResize())
  //   //     return () => window.removeEventListener('resize', () => handleResize())
  //   //   }, [])
  //   //   const calculateVisibleChips = () => {
  //   //     const containerWidth = containerRef.current?.offsetWidth || 0
  //   //     let totalWidth = 0
  //   //     const currVisibleChips = []
  //   //     const remainingChips = [...items.current]
  //   //     while (remainingChips.length > 0) {
  //   //       const chip = remainingChips[0]
  //   //       const chipWidth = getWidth(chip)
  //   //       if (totalWidth + chipWidth + 32 > containerWidth) {
  //   //         const remainingChipsCount = remainingChips.length
  //   //         if (remainingChipsCount > 0) {
  //   //           const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
  //   //           if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
  //   //             currVisibleChips.pop()
  //   //             currVisibleChips.push(`+${remainingChipsCount + 1}`)
  //   //             break
  //   //           }
  //   //           currVisibleChips.push(`+${remainingChipsCount}`)
  //   //         }
  //   //         break
  //   //       }
  //   //       currVisibleChips.push(chip)
  //   //       totalWidth += chipWidth
  //   //       remainingChips.shift()
  //   //     }
  //   //     setVisibleChips(currVisibleChips)
  //   //     console.log({ totalWidth, containerWidth })
  //   //   }
  //   const ChipContainer = (
  //     <div
  //       ref={containerRef}
  //       className="w-[50%] px-4 h-fit py-2 min-h-12 box-border border-2 border-border"
  //     >
  //       <div ref={chipsRef} className="flex gap-2 items-center">
  //         {visibleChips.map((chip, index) => (
  //           <Badge className="shrink whitespace-nowrap" key={index}>
  //             {chip}
  //           </Badge>
  //         ))}
  //       </div>
  //     </div>
  //   )
  //   return { ChipContainer, addItem, removeItem }
  // }
  // export default useChipContainer
  // // // //   useEffect(() => {
  // // //   //     items.current = props.items;
  // // //   //     calculateVisibleChips();
  // // //   //   }, [props.items]);
  // // //   useEffect(() => {
  // // //     const handleResize = debounce(calculateVisibleChips, 100)
  // // //     window.addEventListener('resize', () => handleResize())
  // // //     return () => window.removeEventListener('resize', () => handleResize())
  // // //   }, [])
  // // //   const calculateItemDeleted = (item: string) => {
  // // //     const itemWidth = getWidth
  // // //   }
  // // //   const calculateVisibleChips = () => {
  // // //     const containerWidth = containerRef.current?.offsetWidth || 0
  // // //     let totalWidth = 0
  // // //     const currVisibleChips = []
  // // //     const remainingChips = [...items.current]
  // // //     while (remainingChips.length > 0) {
  // // //       const chip = remainingChips[0]
  // // //       const chipWidth = getWidth(chip)
  // // //       if (totalWidth + chipWidth + 32 > containerWidth) {
  // // //         const remainingChipsCount = remainingChips.length
  // // //         if (remainingChipsCount > 0) {
  // // //           const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
  // // //           if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
  // // //             currVisibleChips.pop()
  // // //             currVisibleChips.push(`+${remainingChipsCount + 1}`)
  // // //             break
  // // //           }
  // // //           currVisibleChips.push(`+${remainingChipsCount}`)
  // // //         }
  // // //         break
  // // //       }
  // // //       currVisibleChips.push(chip)
  // // //       totalWidth += chipWidth
  // // //       remainingChips.shift()
  // // //     }
  // // //     setVisibleChips(currVisibleChips)
  // // //     console.log({ totalWidth, containerWidth })
  // // //   }
  useRef,
  useState,
} from 'react'
import {
  Badge,
  //     let newTotalWidth = totalWidth
  //     const containerWidth = getContainerWidth()
  //     const newVisible = [...visibleChips]
  //     while (newTotalWidth > containerWidth) {}
  //   }
  //   const addItem = (item: string) => {
  //     items.current.add(item)
  //     const newVisibleChips = [...visibleChips]
  //     const containerWidth = containerRef.current?.offsetWidth || 0
  //     const newTotalWidth = totalWidth + getWidth(item)
  //     setTotalWidth(newTotalWidth)
  //     if (totalWidth + 32 > containerWidth) {
  //       const remainingChipsCount = items.current.size - newVisibleChips.length
  //       newVisibleChips.pop()
  //       newVisibleChips.push(`+${remainingChipsCount}`)
  //       setVisibleChips(newVisibleChips)
  //       return
  //     }
  //     if (newTotalWidth + 32 > containerWidth) {
  //       const remainingChipsCount = items.current.size - newVisibleChips.length
  //       if (remainingChipsCount > 0) {
  //         const numberedChipWidth = getWidth(`${remainingChipsCount}`)
  //         if (totalWidth + numberedChipWidth + 32 > containerWidth) {
  //           newVisibleChips.pop()
  //           newVisibleChips.push(`+${remainingChipsCount + 1}`)
  //         } else {
  //           newVisibleChips.push(`+${remainingChipsCount}`)
  //         }
  //       }
  //     } else {
  //       newVisibleChips.push(item)
  //     }
  //     console.log({ newVisibleChips })
  //     setVisibleChips(newVisibleChips)
  //   }
  //   const removeItem = (item: string) => {
  //     items.current.delete(item)
  //     let newVisibleChips = [...visibleChips]
  //     const containerWidth = containerRef.current?.offsetWidth || 0
  //     const newTotalWidth = totalWidth - getWidth(item)
  //     setTotalWidth(newTotalWidth)
  //     if (totalWidth + 32 <= containerWidth) {
  //       newVisibleChips = newVisibleChips.filter((i) => i != item)
  //       console.log(newVisibleChips)
  //       setVisibleChips(newVisibleChips)
  //     }
  //   }
  //   //   useEffect(() => {
  //   //     items.current = props.items;
  //   //     calculateVisibleChips();
  //   //   }, [props.items]);
  //   //   useEffect(() => {
  //   //     const handleResize = debounce(calculateVisibleChips, 100)
  //   //     window.addEventListener('resize', () => handleResize())
  //   //     return () => window.removeEventListener('resize', () => handleResize())
  //   //   }, [])
  //   //   const calculateVisibleChips = () => {
  //   //     const containerWidth = containerRef.current?.offsetWidth || 0
  //   //     let totalWidth = 0
  //   //     const currVisibleChips = []
  //   //     const remainingChips = [...items.current]
  //   //     while (remainingChips.length > 0) {
  //   //       const chip = remainingChips[0]
  //   //       const chipWidth = getWidth(chip)
  //   //       if (totalWidth + chipWidth + 32 > containerWidth) {
  //   //         const remainingChipsCount = remainingChips.length
  //   //         if (remainingChipsCount > 0) {
  //   //           const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
  //   //           if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
  //   //             currVisibleChips.pop()
  //   //             currVisibleChips.push(`+${remainingChipsCount + 1}`)
  //   //             break
  //   //           }
  //   //           currVisibleChips.push(`+${remainingChipsCount}`)
  //   //         }
  //   //         break
  //   //       }
  //   //       currVisibleChips.push(chip)
  //   //       totalWidth += chipWidth
  //   //       remainingChips.shift()
  //   //     }
  //   //     setVisibleChips(currVisibleChips)
  //   //     console.log({ totalWidth, containerWidth })
  //   //   }
  //   const ChipContainer = (
  //     <div
  //       ref={containerRef}
  //       className="w-[50%] px-4 h-fit py-2 min-h-12 box-border border-2 border-border"
  //     >
  //       <div ref={chipsRef} className="flex gap-2 items-center">
  //         {visibleChips.map((chip, index) => (
  //           <Badge className="shrink whitespace-nowrap" key={index}>
  //             {chip}
  //           </Badge>
  //         ))}
  //       </div>
  //     </div>
  //   )
  //   return { ChipContainer, addItem, removeItem }
  // }
  // export default useChipContainer
  // // // //   useEffect(() => {
  // // //   //     items.current = props.items;
  // // //   //     calculateVisibleChips();
  // // //   //   }, [props.items]);
  // // //   useEffect(() => {
  // // //     const handleResize = debounce(calculateVisibleChips, 100)
  // // //     window.addEventListener('resize', () => handleResize())
  // // //     return () => window.removeEventListener('resize', () => handleResize())
  // // //   }, [])
  // // //   const calculateItemDeleted = (item: string) => {
  // // //     const itemWidth = getWidth
  // // //   }
  // // //   const calculateVisibleChips = () => {
  // // //     const containerWidth = containerRef.current?.offsetWidth || 0
  // // //     let totalWidth = 0
  // // //     const currVisibleChips = []
  // // //     const remainingChips = [...items.current]
  // // //     while (remainingChips.length > 0) {
  // // //       const chip = remainingChips[0]
  // // //       const chipWidth = getWidth(chip)
  // // //       if (totalWidth + chipWidth + 32 > containerWidth) {
  // // //         const remainingChipsCount = remainingChips.length
  // // //         if (remainingChipsCount > 0) {
  // // //           const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
  // // //           if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
  // // //             currVisibleChips.pop()
  // // //             currVisibleChips.push(`+${remainingChipsCount + 1}`)
  // // //             break
  // // //           }
  // // //           currVisibleChips.push(`+${remainingChipsCount}`)
  // // //         }
  // // //         break
  // // //       }
  // // //       currVisibleChips.push(chip)
  // // //       totalWidth += chipWidth
  // // //       remainingChips.shift()
  // // //     }
  // // //     setVisibleChips(currVisibleChips)
  // // //     console.log({ totalWidth, containerWidth })
  // // //   }
} from './components/ui/badge'
import {
  //     const containerWidth = getContainerWidth()
  //     const newVisible = [...visibleChips]
  //     while (newTotalWidth > containerWidth) {}
  //   }
  //   const addItem = (item: string) => {
  //     items.current.add(item)
  //     const newVisibleChips = [...visibleChips]
  //     const containerWidth = containerRef.current?.offsetWidth || 0
  //     const newTotalWidth = totalWidth + getWidth(item)
  //     setTotalWidth(newTotalWidth)
  //     if (totalWidth + 32 > containerWidth) {
  //       const remainingChipsCount = items.current.size - newVisibleChips.length
  //       newVisibleChips.pop()
  //       newVisibleChips.push(`+${remainingChipsCount}`)
  //       setVisibleChips(newVisibleChips)
  //       return
  //     }
  //     if (newTotalWidth + 32 > containerWidth) {
  //       const remainingChipsCount = items.current.size - newVisibleChips.length
  //       if (remainingChipsCount > 0) {
  //         const numberedChipWidth = getWidth(`${remainingChipsCount}`)
  //         if (totalWidth + numberedChipWidth + 32 > containerWidth) {
  //           newVisibleChips.pop()
  //           newVisibleChips.push(`+${remainingChipsCount + 1}`)
  //         } else {
  //           newVisibleChips.push(`+${remainingChipsCount}`)
  //         }
  //       }
  //     } else {
  //       newVisibleChips.push(item)
  //     }
  //     console.log({ newVisibleChips })
  //     setVisibleChips(newVisibleChips)
  //   }
  //   const removeItem = (item: string) => {
  //     items.current.delete(item)
  //     let newVisibleChips = [...visibleChips]
  //     const containerWidth = containerRef.current?.offsetWidth || 0
  //     const newTotalWidth = totalWidth - getWidth(item)
  //     setTotalWidth(newTotalWidth)
  //     if (totalWidth + 32 <= containerWidth) {
  //       newVisibleChips = newVisibleChips.filter((i) => i != item)
  //       console.log(newVisibleChips)
  //       setVisibleChips(newVisibleChips)
  //     }
  //   }
  //   //   useEffect(() => {
  //   //     items.current = props.items;
  //   //     calculateVisibleChips();
  //   //   }, [props.items]);
  //   //   useEffect(() => {
  //   //     const handleResize = debounce(calculateVisibleChips, 100)
  //   //     window.addEventListener('resize', () => handleResize())
  //   //     return () => window.removeEventListener('resize', () => handleResize())
  //   //   }, [])
  //   //   const calculateVisibleChips = () => {
  //   //     const containerWidth = containerRef.current?.offsetWidth || 0
  //   //     let totalWidth = 0
  //   //     const currVisibleChips = []
  //   //     const remainingChips = [...items.current]
  //   //     while (remainingChips.length > 0) {
  //   //       const chip = remainingChips[0]
  //   //       const chipWidth = getWidth(chip)
  //   //       if (totalWidth + chipWidth + 32 > containerWidth) {
  //   //         const remainingChipsCount = remainingChips.length
  //   //         if (remainingChipsCount > 0) {
  //   //           const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
  //   //           if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
  //   //             currVisibleChips.pop()
  //   //             currVisibleChips.push(`+${remainingChipsCount + 1}`)
  //   //             break
  //   //           }
  //   //           currVisibleChips.push(`+${remainingChipsCount}`)
  //   //         }
  //   //         break
  //   //       }
  //   //       currVisibleChips.push(chip)
  //   //       totalWidth += chipWidth
  //   //       remainingChips.shift()
  //   //     }
  //   //     setVisibleChips(currVisibleChips)
  //   //     console.log({ totalWidth, containerWidth })
  //   //   }
  //   const ChipContainer = (
  //     <div
  //       ref={containerRef}
  //       className="w-[50%] px-4 h-fit py-2 min-h-12 box-border border-2 border-border"
  //     >
  //       <div ref={chipsRef} className="flex gap-2 items-center">
  //         {visibleChips.map((chip, index) => (
  //           <Badge className="shrink whitespace-nowrap" key={index}>
  //             {chip}
  //           </Badge>
  //         ))}
  //       </div>
  //     </div>
  //   )
  //   return { ChipContainer, addItem, removeItem }
  // }
  // export default useChipContainer
  // // // //   useEffect(() => {
  // // //   //     items.current = props.items;
  // // //   //     calculateVisibleChips();
  // // //   //   }, [props.items]);
  // // //   useEffect(() => {
  // // //     const handleResize = debounce(calculateVisibleChips, 100)
  // // //     window.addEventListener('resize', () => handleResize())
  // // //     return () => window.removeEventListener('resize', () => handleResize())
  // // //   }, [])
  // // //   const calculateItemDeleted = (item: string) => {
  // // //     const itemWidth = getWidth
  // // //   }
  // // //   const calculateVisibleChips = () => {
  // // //     const containerWidth = containerRef.current?.offsetWidth || 0
  // // //     let totalWidth = 0
  // // //     const currVisibleChips = []
  // // //     const remainingChips = [...items.current]
  // // //     while (remainingChips.length > 0) {
  // // //       const chip = remainingChips[0]
  // // //       const chipWidth = getWidth(chip)
  // // //       if (totalWidth + chipWidth + 32 > containerWidth) {
  // // //         const remainingChipsCount = remainingChips.length
  // // //         if (remainingChipsCount > 0) {
  // // //           const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
  // // //           if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
  // // //             currVisibleChips.pop()
  // // //             currVisibleChips.push(`+${remainingChipsCount + 1}`)
  // // //             break
  // // //           }
  // // //           currVisibleChips.push(`+${remainingChipsCount}`)
  // // //         }
  // // //         break
  // // //       }
  // // //       currVisibleChips.push(chip)
  // // //       totalWidth += chipWidth
  // // //       remainingChips.shift()
  // // //     }
  // // //     setVisibleChips(currVisibleChips)
  // // //     console.log({ totalWidth, containerWidth })
  // // //   }
  debounce,
} from './lib/utils'

import { debounce } from '@/lib/utils'
import { useRef, useState, useEffect } from 'react'

// const useChipContainer = () => {
//   const items = useRef(new Set())
//   const [visibleChips, setVisibleChips] = useState<string[]>([])
//   const [chipsWidth, setChipsWidth] = useState(0)
//   const [totalWidth, setTotalWidth] = useState(0)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const chipsRef = useRef<HTMLDivElement>(null)
//   const getContainerWidth = () => containerRef.current?.offsetWidth || 0

//   const handleResize = () => {
//     let newTotalWidth = totalWidth
//     const containerWidth = getContainerWidth()
//     const newVisible = [...visibleChips]

//     while (newTotalWidth > containerWidth) {}
//   }

//   const addItem = (item: string) => {
//     items.current.add(item)

//     const newVisibleChips = [...visibleChips]

//     const containerWidth = containerRef.current?.offsetWidth || 0

//     const newTotalWidth = totalWidth + getWidth(item)
//     setTotalWidth(newTotalWidth)

//     if (totalWidth + 32 > containerWidth) {
//       const remainingChipsCount = items.current.size - newVisibleChips.length

//       newVisibleChips.pop()
//       newVisibleChips.push(`+${remainingChipsCount}`)

//       setVisibleChips(newVisibleChips)
//       return
//     }

//     if (newTotalWidth + 32 > containerWidth) {
//       const remainingChipsCount = items.current.size - newVisibleChips.length

//       if (remainingChipsCount > 0) {
//         const numberedChipWidth = getWidth(`${remainingChipsCount}`)

//         if (totalWidth + numberedChipWidth + 32 > containerWidth) {
//           newVisibleChips.pop()
//           newVisibleChips.push(`+${remainingChipsCount + 1}`)
//         } else {
//           newVisibleChips.push(`+${remainingChipsCount}`)
//         }
//       }
//     } else {
//       newVisibleChips.push(item)
//     }
//     console.log({ newVisibleChips })
//     setVisibleChips(newVisibleChips)
//   }

//   const removeItem = (item: string) => {
//     items.current.delete(item)

//     let newVisibleChips = [...visibleChips]
//     const containerWidth = containerRef.current?.offsetWidth || 0

//     const newTotalWidth = totalWidth - getWidth(item)
//     setTotalWidth(newTotalWidth)

//     if (totalWidth + 32 <= containerWidth) {
//       newVisibleChips = newVisibleChips.filter((i) => i != item)
//       console.log(newVisibleChips)
//       setVisibleChips(newVisibleChips)
//     }
//   }

//   //   useEffect(() => {
//   //     items.current = props.items;
//   //     calculateVisibleChips();
//   //   }, [props.items]);

//   //   useEffect(() => {
//   //     const handleResize = debounce(calculateVisibleChips, 100)
//   //     window.addEventListener('resize', () => handleResize())
//   //     return () => window.removeEventListener('resize', () => handleResize())
//   //   }, [])

//   //   const calculateVisibleChips = () => {
//   //     const containerWidth = containerRef.current?.offsetWidth || 0
//   //     let totalWidth = 0

//   //     const currVisibleChips = []
//   //     const remainingChips = [...items.current]

//   //     while (remainingChips.length > 0) {
//   //       const chip = remainingChips[0]
//   //       const chipWidth = getWidth(chip)

//   //       if (totalWidth + chipWidth + 32 > containerWidth) {
//   //         const remainingChipsCount = remainingChips.length
//   //         if (remainingChipsCount > 0) {
//   //           const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
//   //           if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
//   //             currVisibleChips.pop()
//   //             currVisibleChips.push(`+${remainingChipsCount + 1}`)
//   //             break
//   //           }
//   //           currVisibleChips.push(`+${remainingChipsCount}`)
//   //         }
//   //         break
//   //       }

//   //       currVisibleChips.push(chip)
//   //       totalWidth += chipWidth
//   //       remainingChips.shift()
//   //     }

//   //     setVisibleChips(currVisibleChips)

//   //     console.log({ totalWidth, containerWidth })
//   //   }

//   const ChipContainer = (
//     <div
//       ref={containerRef}
//       className="w-[50%] px-4 h-fit py-2 min-h-12 box-border border-2 border-border"
//     >
//       <div ref={chipsRef} className="flex gap-2 items-center">
//         {visibleChips.map((chip, index) => (
//           <Badge className="shrink whitespace-nowrap" key={index}>
//             {chip}
//           </Badge>
//         ))}
//       </div>
//     </div>
//   )
//   return { ChipContainer, addItem, removeItem }
// }

// export default useChipContainer

// // // //   useEffect(() => {
// // //   //     items.current = props.items;
// // //   //     calculateVisibleChips();
// // //   //   }, [props.items]);

// // //   useEffect(() => {
// // //     const handleResize = debounce(calculateVisibleChips, 100)
// // //     window.addEventListener('resize', () => handleResize())
// // //     return () => window.removeEventListener('resize', () => handleResize())
// // //   }, [])

// // //   const calculateItemDeleted = (item: string) => {
// // //     const itemWidth = getWidth
// // //   }

// // //   const calculateVisibleChips = () => {
// // //     const containerWidth = containerRef.current?.offsetWidth || 0
// // //     let totalWidth = 0

// // //     const currVisibleChips = []
// // //     const remainingChips = [...items.current]

// // //     while (remainingChips.length > 0) {
// // //       const chip = remainingChips[0]
// // //       const chipWidth = getWidth(chip)

// // //       if (totalWidth + chipWidth + 32 > containerWidth) {
// // //         const remainingChipsCount = remainingChips.length
// // //         if (remainingChipsCount > 0) {
// // //           const numberedChipsWidth = getWidth(`+${remainingChipsCount}`)
// // //           if (totalWidth + numberedChipsWidth + 32 > containerWidth) {
// // //             currVisibleChips.pop()
// // //             currVisibleChips.push(`+${remainingChipsCount + 1}`)
// // //             break
// // //           }
// // //           currVisibleChips.push(`+${remainingChipsCount}`)
// // //         }
// // //         break
// // //       }

// // //       currVisibleChips.push(chip)
// // //       totalWidth += chipWidth
// // //       remainingChips.shift()
// // //     }

// // //     setVisibleChips(currVisibleChips)

// // //     console.log({ totalWidth, containerWidth })
// // //   }
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
