export enum ActionType {
  CloseNavBar,
  ToggleNavBar,
  ToggleSwitch
}

export interface CloseNavBar {
  type: ActionType.CloseNavBar;
}

export interface ToggleNavBar {
  type: ActionType.ToggleNavBar;
}

export interface ToggleSwitch {
  type: ActionType.ToggleSwitch;
}

export type AppActions = CloseNavBar | ToggleNavBar | ToggleSwitch;
