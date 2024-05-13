import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastCallTime = 0;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    const remaining = delay - (now - lastCallTime);

    if (remaining <= 0) {
      func(...args);
      lastCallTime = now;
    } else if (!timerId) {
      timerId = setTimeout(() => {
        timerId = null;
        func(...args);
        lastCallTime = Date.now();
      }, remaining);
    }
  };
}


export const getElementWidth = (chipText: string) => {
  const chip = document.getElementById("root-badge-element")!;
  chip.innerText = chipText;
  return chip.offsetWidth + 8;
};
