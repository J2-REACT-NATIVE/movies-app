import { movieApi } from "@/core/api/movie-api"
import { CastMapper } from "@/infraestructure/interfaces/mappers/cast.mapper"
import { MovieDBCreditsResponse } from "@/infraestructure/interfaces/moviedb-credits.reponse"

export const getMovieCastAction=async (movieId:number)=> {
    try {
        const {data}= await movieApi.get<MovieDBCreditsResponse>(`/${movieId}/credits`)
        return data.cast.map((actor)=>CastMapper.fromMovieDBCastToEntity(actor))
    } catch (error) {
        console.log(error)
        throw 'Can load cast by id'
    }
}