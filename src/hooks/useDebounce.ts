import {useCallback, useRef} from 'react';

const DEFAULT_DEBOUNCE_TIMEOUT = 1000;

export const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  wait = DEFAULT_DEBOUNCE_TIMEOUT,
): T => {
  // Create hook to hold timer and callback
  const lastTimeout = useRef<any>();

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      clearTimeout(lastTimeout.current);

      lastTimeout.current = setTimeout(() => {
        callback(...args);
      }, wait);
    },
    [callback, wait],
  );

  return debouncedCallback as any;
};
