import { useObserver } from '@src/hooks/useObserver';
import React, { memo } from 'react';

const Observable = () => {
  const [listItems, setListItems] = React.useState(Array.from(Array(30).keys(), n => n + 1));
  const loadMore = () => {
    setListItems(prev => [...prev, ...Array.from(Array(20).keys(), n => n + prev.length + 1)]);
  };

  const { setElement, entry } = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  React.useEffect(() => {
    if (entry?.isIntersecting) {
      loadMore();
    }
  }, [entry]);

  return (
    <div>
      {listItems.map(item => (
        <div key={item}>{`Item ${item}`}</div>
      ))}
      <div ref={setElement}>Loading...</div>
    </div>
  );
};

export default memo(Observable);
