import {
  OPEN_SETTING,
  CLOSE_SETTING,
  CHANGE_BACKGROUND,
  PICK_COLOR,
  SUBMIT_CHANGES,
} from "../actionTypes";

const initialState = {
    isOpen: false
}

export default function SettingReducer(state=initialState, action){
    switch (action.type) {
        case OPEN_SETTING:
            return Object.assign({},state,{isOpen:true})
            break;
        case CLOSE_SETTING:
            return Object.assign({},state,{isOpen:false})
        default:
            return state
            break;
    }
}
