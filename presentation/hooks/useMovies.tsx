import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  // Queries
  const getNowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
    //un dia 24 horas
    staleTime: 1000 * 60 * 60 * 24,
  });
  const getPopularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => popularMoviesAction(),
    //un dia 24 horas
    staleTime: 1000 * 60 * 60 * 24,
  });
  const getTopRated = useQuery({
    queryKey: ["movies", "top_rated"],
    queryFn: () => topRatedMoviesAction(),
    //un dia 24 horas
    staleTime: 1000 * 60 * 60 * 24,
  });
  const getUpcoming = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: () => upcomingMoviesAction(),
    //un dia 24 horas
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { getNowPlayingQuery, getPopularQuery,getTopRated,getUpcoming };
};
