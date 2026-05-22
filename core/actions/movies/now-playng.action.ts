import { movieApi } from "@/core/api/movie-api"
import { MovieMapper } from "@/infraestructure/interfaces/mappers/movie.mapper"
import { MoviesResponse } from "@/infraestructure/interfaces/movies-response"

export const nowPlayingAction= async()=> {
    try {
        const {data}=await movieApi.get<MoviesResponse>('/now_playing')
        const movies=data.results.map((result)=>MovieMapper.fromtheMovieDBTomovie(result))
        console.log(JSON.stringify(movies,null,2))
        return movies
    } catch (error) {
        console.log(error)
        throw "Cannot load now playing movies"
    }
}