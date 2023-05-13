import { configureStore } from '@reduxjs/toolkit';
import { formCardsSlice } from './formCardsSlice';
import { searchSlice } from './searchSlice';
import { searchResultSlice } from "./searchResultsSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    searchResults: searchResultSlice.reducer,
    formCards: formCardsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
