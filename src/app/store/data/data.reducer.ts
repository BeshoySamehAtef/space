import { Action, createReducer, on } from "@ngrx/store";
import { getDataComplete } from "./data.actions";

export const dataFeatureName = 'data';

export interface DataState {
  data: any;
}

export const initialDataState: DataState = {
  data: null,
};

const dataReducerInternal = createReducer(
  initialDataState,
  on(getDataComplete, (state, { data }) => {
    return {
      ...state,
      data,
    };
  })
);
export function dataReducer(state: DataState | undefined, action: Action) {
  return dataReducerInternal(state, action);
}