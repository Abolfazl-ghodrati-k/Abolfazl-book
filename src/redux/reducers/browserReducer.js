import {OPEN_BROWSER,CLOSE_BROWSER} from '../actionTypes'

const initialState = {
    isOpen : false
}

export default function BrowserReducer(state=initialState, action) {
    switch (action.type) {
        case OPEN_BROWSER:
            return Object.assign({}, state,{isOpen:true})
        case CLOSE_BROWSER:
            return Object.assign({},state,{isOpen:false})
        default:
            return state
    }

}