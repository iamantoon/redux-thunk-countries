import {SET_COUNTRIES, SET_LOADING, SET_ERROR} from './countriesActions';

const initialState = {
    countries: [],
    status: 'idle',
    error: null
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_COUNTRIES: 
            return {...state, status: 'received', countries: action.payload}
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR: 
            return {
                ...state,
                error: action.payload,
                status: 'rejected'
            }
        default:
            return state;
    }
}