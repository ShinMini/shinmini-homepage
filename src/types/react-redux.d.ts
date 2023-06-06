export declare module 'react-redux' {
  import type { RootState, AppDispatch } from '../store/index';
  import { useDispatch, useSelector } from 'react-redux';

  export const useDispatch: useDispatch<AppDispatch>;
  export const useSelector: useSelector<RootState>;
}
