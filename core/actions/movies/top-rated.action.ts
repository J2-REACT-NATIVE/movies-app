import { movieApi } from "@/core/api/movie-api"
import { MovieMapper } from "@/infraestructure/interfaces/mappers/movie.mapper"
import { MoviesResponse } from "@/infraestructure/interfaces/movies-response"

export const topRatedMoviesAction= async()=> {
    try {
        const {data}=await movieApi.get<MoviesResponse>('/top_rated')
        const movies=data.results.map((result)=>MovieMapper.fromtheMovieDBTomovie(result))
        //console.log(JSON.stringify(movies,null,2))
        return movies
    } catch (error) {
        console.log(error)
        throw "Cannot load top rated movies"
    }
}