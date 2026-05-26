import { movieApi } from "@/core/api/movie-api"
import { MovieMapper } from "@/infraestructure/interfaces/mappers/movie.mapper"
import { MoviesResponse } from "@/infraestructure/interfaces/movies-response"
interface Options {
    page?:number;
    limit?:number;
}
export const topRatedMoviesAction= async({page=1,limit=10}:Options)=> {
    try {
        const {data}=await movieApi.get<MoviesResponse>('/top_rated',{
            params:{
                page:page
            }
        })
        const movies=data.results.map((result)=>MovieMapper.fromtheMovieDBTomovie(result))
        //console.log(JSON.stringify(movies,null,2))
        return movies
    } catch (error) {
        console.log(error)
        throw "Cannot load top rated movies"
    }
}