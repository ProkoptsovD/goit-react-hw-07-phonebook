import { combineReducers } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsApi';
import filterSliceReducer from './filter/filter.slice';

export const rootReducer = combineReducers({
    filter: filterSliceReducer,
    [contactsApi.reducerPath]: contactsApi.reducer
})