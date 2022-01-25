import { ActionType, AppActions } from "./actions";
import { AppState } from "./context";

export const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case ActionType.CloseNavBar:
      return {
        ...state,
        isOpen: false
      };
    case ActionType.ToggleNavBar:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    default:
      return state;
  }
};
