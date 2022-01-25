export enum ActionType {
  CloseNavBar,
  ToggleNavBar
}

export interface CloseNavBar {
  type: ActionType.CloseNavBar;
}

export interface ToggleNavBar {
  type: ActionType.ToggleNavBar;
}

export type AppActions = CloseNavBar | ToggleNavBar;
