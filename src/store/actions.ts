export enum ActionType {
  ToggleNav
}

export interface ToggleNav {
  type: ActionType.ToggleNav;
}

export type AppActions = ToggleNav;
