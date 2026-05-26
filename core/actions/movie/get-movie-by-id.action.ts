import { movieApi } from "@/core/api/movie-api"
import { MovieMapper } from "@/infraestructure/interfaces/mappers/movie.mapper"
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface"
import { MovieDBMovieResponse } from "@/infraestructure/interfaces/moviedb-movie.response"


export const getMovieByIdAction= async(id:number | string ):Promise<CompleteMovie>=> {
    try {
        const {data}= await movieApi.get<MovieDBMovieResponse>(`/${id}`)
        console.log(data)
        return MovieMapper.fromTheMovieDBToCompleteMovie(data)
    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies'
    }

}