import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataState, dataFeatureName } from "./data.reducer";

export const getDataFeatureState = createFeatureSelector(dataFeatureName);

export const selectData = createSelector(
  getDataFeatureState,
  (state: any) => state.data
);

