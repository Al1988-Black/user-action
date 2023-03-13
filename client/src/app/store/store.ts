import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { actionAPI } from "../services/ActionService";

const rootReducer = combineReducers({
    [actionAPI.reducerPath]: actionAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(actionAPI.middleware),
    });
};
