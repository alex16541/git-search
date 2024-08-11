import { configureStore } from '@reduxjs/toolkit';

import { searchRepoApi } from './api';

// Redux store
export default configureStore({
    reducer: {
        [searchRepoApi.reducerPath]: searchRepoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchRepoApi.middleware),
});
