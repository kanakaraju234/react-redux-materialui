import * as types from "./actionType";
const initialState = {
    devices: [],
    device: {},
    loading: true,
}

const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DEVICES:
            return {
                ...state,
                devices: action.payload,
                loading: false,
            }
        case types.ADD_DEVICE:
            return {
                ...state,
                device: action.payload,
                loading: false,
            }
        case types.GET_SINGLE_DEVICE:
            return {
                ...state,
                device: action.payload,
                loading: false,
            }
        case types.DELETE_DEVICE:
        case types.UPDATE_DEVICE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    };

};
export default deviceReducer;