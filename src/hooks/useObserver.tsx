import { useEffect, useRef, useState } from 'react';

export const useObserver = (options: IntersectionObserverInit) => {
  const [element, setElement] = useState<Element | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    // Only observe if 'element' is not null
    if (element) {
      // Assign a new IntersectionObserver instance to 'observer.current'
      observer.current = new IntersectionObserver(
        // This callback function will run whenever the target meets a threshold specified for the IntersectionObserver
        ([entry]) => {
          // Update 'entry' state with the received 'entry'
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

    // Clean up function
    return () => {
      // Stop observing if 'observer.current' is not null
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [element, root, rootMargin, threshold]); // Dependence array

  return { setElement, entry };
};
