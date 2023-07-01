import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useOnOutsideClick = (targetRefs: RefObject<Element>[], onOutSideClick: (event: Event) => void): void => {
  useEffect(() => {
    const handleDocumentClick = (event: Event) => {
      const isTargetClicked = targetRefs.some(ref => {
        return event.target instanceof Node && ref.current && ref.current.contains(event.target);
      });

      !isTargetClicked && onOutSideClick(event);
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('touchstart', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('touchstart', handleDocumentClick);
    };
  }, [targetRefs, onOutSideClick]);
};
