import { useEffect, useRef } from "react";

/**
 * Excute a function only if the component is mounted.
 * @param asyncFn function to excute. The function will receive a flag `isMounted`.
 * @param deps dependencies (like in useEffect)
 */
export const useSafeAsync = (
  asyncFn: (isMounted: boolean) => void,
  deps: any[] = [],
) => {
  const isMounted = useRef(true);

  useEffect(() => {
    asyncFn(isMounted.current);

    return () => {
      isMounted.current = false;
    };
  }, deps);
};
