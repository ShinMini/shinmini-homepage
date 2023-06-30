// src/__tests__/App.test.tsx
// import { render } from '@testing-library/react';
// import App from '../src/App';

// describe('App', () => {
//   it('should work as expected', () => {
//     render(<App />);
//   });
// });

describe('NaN testing', () => {
  it('should be NaN', () => {
    expect(Number('hello')).toBeNaN();
  });
});
