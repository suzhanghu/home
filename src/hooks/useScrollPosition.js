/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

const isBrowser = typeof window !== `undefined`;

// 读取当前滚动位置：可从 window 读取，也可从指定元素读取。
function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

// 自定义 Hook：订阅滚动事件，并把前后位置传给回调。
// 参数说明：
// - effect: 回调函数，签名为 callback({ prevPos, currPos })
// - deps: 依赖数组，变化后重新绑定监听
// - element: 可选，目标元素 ref
// - useWindow: 是否从 window 读取，而不是元素坐标
// - wait: 可选节流毫秒数
export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      throttleTimeout && clearTimeout(throttleTimeout);
    };
  }, deps);
}

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null,
};
