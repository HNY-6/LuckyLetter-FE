import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
  // slices
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
