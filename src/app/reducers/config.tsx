import { createSlice  } from '@reduxjs/toolkit';

type ConfigType = {
    siteTitle: string,
};

const initialState: ConfigType = {
    siteTitle: import.meta.env.VITE_SITE_TITLE,
};

const configSlice = createSlice( {
    name: 'config',
    initialState,
    reducers: {},
} );

export default configSlice.reducer;