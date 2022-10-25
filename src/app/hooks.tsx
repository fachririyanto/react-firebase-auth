import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelecttor: TypedUseSelectorHook<RootState> = useSelector;

export const getStoreValues = () => useAppSelecttor( ( state ) => state );