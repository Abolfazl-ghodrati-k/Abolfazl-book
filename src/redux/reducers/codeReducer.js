import {
  OPEN_CODE,
  CLOSE_CODE,
  MAXIMIZE_CODE,
  MINIMIZE_CODE,
  RESIZE_CODE,
  ORDER_CODE,
  UPDATE_ROOMS,
  SET_ACTIVE_ROOM
} from "../actionTypes";

const initialState = {
  name: "CODE",
  isOpen: false,
  isMaximized: false,
  isMinimized: false,
  order: null,
  rooms: null,
  activeRoom: null
};

/**
//  * rooms property -> array of
@param { 
  id: string,
  code: string, 
  language: string, 
  users: [
    { role: 'owner' | 'editor' | 'visitor', email: string, status: 'online' | 'offline', id: string }
  ]
 }
*/

export default function CodeReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CODE:
      return Object.assign({}, state, { isOpen: true });

    case CLOSE_CODE:
      return Object.assign({}, state, { isOpen: false });

    case MAXIMIZE_CODE:
      return Object.assign({}, state, {
        isMaximized: true,
        isMinimized: false,
      });

    case MINIMIZE_CODE:
      return Object.assign({}, state, {
        isMinimized: true,
      });

    case RESIZE_CODE:
      return Object.assign({}, state, {
        isMaximized: action.payload.maximized,
        isMinimized: action.payload.minimized,
      });

    case ORDER_CODE:
      return Object.assign({}, state, { order: action.payload });

    case UPDATE_ROOMS: 
      return Object.assign({}, state, { rooms: action.payload.rooms });

    case SET_ACTIVE_ROOM:
      return Object.assign({}, state, { activeRoom: action.payload.activeRoom });
    
      default:
      return state;
  }
}
