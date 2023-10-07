import { ALLOW_SINGLE_MOVIE, CURR_MOVIE, SIMILAR_MOVIES } from "./actionTypes"

const initialState={
    load:false,
    currentMovie:{},
    similarMovies:[],
    preview:false
}
export const reducer=(store=initialState,action)=>{


    switch(action.type){

        case CURR_MOVIE:{
            return{...store,currentMovie:action.payload}
        }
        case SIMILAR_MOVIES:{
            return {...store,similarMovies:action.payload}
        }
        case ALLOW_SINGLE_MOVIE:{
            return{...store,preview:action.payload}
        }
        default:return store
    }
}