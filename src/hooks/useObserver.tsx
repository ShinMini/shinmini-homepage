import { useEffect, useRef, useState } from 'react';

export const useObserver = ({ root, rootMargin, threshold }: IntersectionObserverInit) => {
  const [element, setElement] = useState<Element | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (element) {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          setEntry(entry);
        },
        {
          root,
          rootMargin,
          threshold,
        },
      );

      observer.current.observe(element);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [element, root, rootMargin, threshold]); // Dependence array

  return { setElement, entry };
};
