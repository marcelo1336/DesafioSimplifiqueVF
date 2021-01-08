import {
    SET_MANIFESTATIONS,
    CREATING_MANIFESTATION,
    MANIFESTATION_CREATED
} from '../actions/actionTypes'

const initialState = {
    manifestations: [],
    isUploading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MANIFESTATIONS:
            return {
                ...state,
                manifestations: action.payload
            }
        case CREATING_MANIFESTATION:
            return {
                ...state,
                isUploading: true
            }
        case MANIFESTATION_CREATED: 
            return {
                ...state,
                isUploading: false
            }
        default:
            return state
    }
}

export default reducer