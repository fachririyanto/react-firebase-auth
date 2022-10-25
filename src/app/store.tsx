import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import configReducer from './reducers/config';

export const store = configureStore( {
    reducer: {
        auth: authReducer,
        config: configReducer,
    },
} );

export type AppDispatch = typeof store.dispatch;
export type RootState   = ReturnType<typeof store.getState>;