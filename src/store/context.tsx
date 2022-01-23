import { createContext, useContext, useReducer } from "react";
import { ActionType } from "./actions";
import { appReducer } from "./reducers";

export interface AppState {
  isOpen: boolean;
  toggleNav: () => void;
}

const initialState: AppState = {
  isOpen: false,
  toggleNav: () => {}
};

export const AppContext = createContext<AppState>(initialState);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleNav = () => {
    dispatch({ type: ActionType.ToggleNav });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
