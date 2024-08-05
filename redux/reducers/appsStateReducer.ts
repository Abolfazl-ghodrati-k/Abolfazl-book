import {
    AbolfazlBookAppDimension,
    AbolfazlBookAppName,
    AbolfazlBookAppPosition,
    getAppList,
  } from "@/config/appsConfig";
  
  type AbolfazlBookAppState = "opened" | "minimized" | "maximized" | "closed";
  
  type AbolfazlBookAppStateInitialValueType = Record<
    AbolfazlBookAppName,
    {
      state: AbolfazlBookAppState;
      dimension: AbolfazlBookAppDimension;
      position: AbolfazlBookAppPosition;
      order: number | null;
    }
  >;
  
  type AbolfazlBookAppStateActionType = {
    type:
      | "Open"
      | "Minimize"
      | "Maximize"
      | "Close"
      | "Move"
      | "Resize"
      | "ChangeOrder";
    payload: {
      appName: AbolfazlBookAppName;
      dimension?: AbolfazlBookAppDimension;
      position?: AbolfazlBookAppPosition;
      order?: number;
    };
  };
  
  // Define the initial state for all apps listed in getAppList
  const appStateInitialState: AbolfazlBookAppStateInitialValueType = {} as AbolfazlBookAppStateInitialValueType;
  
  // Initialize each app's state to "closed"
  getAppList().forEach((appName) => {
    appStateInitialState[appName] = {
      state: "closed",
      dimension: {
        height: 400,
        width: 400,
      },
      position: {
        x: 20,
        y: 20,
      },
      order: null,
    };
  });
  
  export default function appsStateReducer(
    state = appStateInitialState,
    action: AbolfazlBookAppStateActionType
  ): AbolfazlBookAppStateInitialValueType {
    switch (action.type) {
      case "Open":
        return {
          ...state,
          [action.payload.appName]: {
            ...state[action.payload.appName],
            state: "opened",
          },
        };
  
      case "Minimize":
        return {
          ...state,
          [action.payload.appName]: {
            ...state[action.payload.appName],
            state: "minimized",
          },
        };
  
      case "Maximize":
        return {
          ...state,
          [action.payload.appName]: {
            ...state[action.payload.appName],
            state: "maximized",
          },
        };
  
      case "Close":
        return {
          ...state,
          [action.payload.appName]: {
            ...state[action.payload.appName],
            state: "closed",
          },
        };
  
      case "Move":
        if (action.payload.position) {
          return {
            ...state,
            [action.payload.appName]: {
              ...state[action.payload.appName],
              position: action.payload.position,
            },
          };
        }
        return state;
  
      case "Resize":
        if (action.payload.dimension) {
          return {
            ...state,
            [action.payload.appName]: {
              ...state[action.payload.appName],
              dimension: action.payload.dimension,
            },
          };
        }
        return state;
  
      case "ChangeOrder":
        if (action.payload.order !== undefined) {
          return {
            ...state,
            [action.payload.appName]: {
              ...state[action.payload.appName],
              order: action.payload.order,
            },
          };
        }
        return state;
  
      default:
        return state;
    }
  }
  