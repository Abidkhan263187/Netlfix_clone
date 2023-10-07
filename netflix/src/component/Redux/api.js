import axios from "axios"
import { currMovObj, similarMoviesArr } from "./action"

export  const currentMovie=(id,api)=>async(dispatch)=>{
   
try {
    await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${api}`).
    then(({data})=>{
        // console.log(data)
        dispatch(currMovObj(data))
     
    })
} catch (error) {
    console.log(error+"error while getting current movie data")
}
}
export  const similarMovies=(id,api)=>async(dispatch)=>{
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&api_key=${api}`).
        then(({data})=>{
            // console.log(data.results)
            dispatch(similarMoviesArr(data.results))
         
        })
    } catch (error) {
        console.log(error+"error while getting similar movie data")
    }
    }