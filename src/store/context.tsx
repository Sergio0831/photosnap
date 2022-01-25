import { createContext, useContext, useReducer } from "react";
import { ActionType } from "./actions";
import { appReducer } from "./reducers";

export interface AppState {
  isOpen: boolean;
  closeNavBar: () => void;
  toggleNavBar: () => void;
}

const initialState: AppState = {
  isOpen: false,
  closeNavBar: () => {},
  toggleNavBar: () => {}
};

export const AppContext = createContext<AppState>(initialState);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const closeNavBar = () => {
    dispatch({ type: ActionType.CloseNavBar });
  };

  const toggleNavBar = () => {
    dispatch({ type: ActionType.ToggleNavBar });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleNavBar, closeNavBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
