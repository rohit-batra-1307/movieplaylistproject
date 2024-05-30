import { FETCH_ALL_MOVIES,FETCH_ALL_MOVIE, CREATE_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from "../constants/actionTypes";

const movieReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_ALL_MOVIES:
            console.log("Hello",action.payload);
            return action.payload;
        case FETCH_ALL_MOVIE:
            console.log("Hello",action.payload);
            return action.payload;
        case CREATE_MOVIE:
            return [...state, action.payload];
        case EDIT_MOVIE:
            return state.map(rating => rating.id === action.payload.id ? action.payload : rating);
        case DELETE_MOVIE:
            return state.filter(rating => rating.id !== action.payload);
        default:
            return state;
    }
}

export default movieReducer