import { useLayoutEffect, useEffect } from "react"

// 浏览器环境用 useLayoutEffect，非浏览器/SSR 环境降级到 useEffect。
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect
