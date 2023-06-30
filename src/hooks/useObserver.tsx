import { useEffect, useMemo, useRef, useState } from 'react';

export const useObserver = ({ root, rootMargin, threshold }: IntersectionObserverInit) => {
  const [element, setElement] = useState<Element | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const {
    root: _root,
    rootMargin: _rootMargin,
    threshold: _threshold,
  } = useMemo(
    () => ({
      root,
      rootMargin,
      threshold,
    }),
    [root, rootMargin, threshold],
  ); // Dependence array

  useEffect(() => {
    if (element) {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          setEntry(entry);
        },
        {
          root: _root,
          rootMargin: _rootMargin,
          threshold: _threshold,
        },
      );

      observer.current.observe(element);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [_root, _rootMargin, _threshold, element]); // Dependence array

  return { setElement, entry };
};
