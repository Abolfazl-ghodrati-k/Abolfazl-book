import { OPEN_CALCULATOR, CLOSE_CALCULATOR } from "../actionTypes";

const initialState = {
  isOpen: false,
};

export default function CalculatorReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_CALCULATOR:
        return Object.assign({}, state, {isOpen: true})
        case CLOSE_CALCULATOR:
        return Object.assign({}, state, {isOpen: false})
        
        default:
            return state
    }
}
