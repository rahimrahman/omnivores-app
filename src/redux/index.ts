import {Action} from "redux";

export const UPDATE_COUNTER = "updateCounter";

export interface OmniAppState {
  counter: number;
}
export interface IAction extends Action {
  payload: any
}
const INITIAL_STATE = {
  counter: 0
}
export const reducers = (state: OmniAppState, action: IAction): OmniAppState => {
  switch (action.type) {
    case UPDATE_COUNTER:
      return { ...state, counter: action.payload.counter }
    default:
      return INITIAL_STATE
  }
}

export const updateCounter = (counter: number) => {
  return {
    type: UPDATE_COUNTER,
    payload: { counter }
  }
}
