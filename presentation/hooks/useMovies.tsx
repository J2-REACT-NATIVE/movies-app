import { nowPlayingAction } from "@/core/actions/movies/now-playng.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  // Queries
  const getNowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: () => nowPlayingAction(),
    //un dia 24 horas
    staleTime: 1000 * 60 * 60 * 24,
  }); 
  return { getNowPlayingQuery };
};
