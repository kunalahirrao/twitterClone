import {
    SIGN_IN
} from '../actionTypes'


const initialState = {
    token:"",
    userId:""
}

const reducer = (state = initialState, action) => {    
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                token:action.payload.token,
                userId:action.payload.user._id
            }       
        default: return state
    }
}

export default reducer