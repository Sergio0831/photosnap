import { createContext, useContext, useReducer } from "react";
import { ActionType } from "./actions";
import { appReducer } from "./reducers";

export interface AppState {
  isOpen: boolean;
  isOn: boolean;
  plan: string;
  toggleSwitch: () => void;
  closeNavBar: () => void;
  toggleNavBar: () => void;
}

const initialState: AppState = {
  isOpen: false,
  isOn: false,
  plan: "monthly",
  toggleSwitch: () => {},
  closeNavBar: () => {},
  toggleNavBar: () => {}
};

export const AppContext = createContext<AppState>(initialState);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleSwitch = () => {
    dispatch({ type: ActionType.ToggleSwitch });
  };

  const closeNavBar = () => {
    dispatch({ type: ActionType.CloseNavBar });
  };

  const toggleNavBar = () => {
    dispatch({ type: ActionType.ToggleNavBar });
  };

  return (
    <AppContext.Provider
      value={{ ...state, toggleNavBar, closeNavBar, toggleSwitch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
