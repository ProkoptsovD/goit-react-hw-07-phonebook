import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "services/contactsApi";
import { rootReducer } from "./root.reducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        contactsApi.middleware]
})

export default store;