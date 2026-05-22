import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import MainSlideShow from "../../presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "../../presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const { getNowPlayingQuery, getPopularQuery,getTopRated,getUpcoming } = useMovies();
  const safeArea = useSafeAreaInsets();
  console.log({ safeArea });
  //console.log("index")
  if (getNowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center border-2">
        <ActivityIndicator color="blue" size={40} />
      </View>
    );
  }
  return (
    //<View className="flex-1 border-2 justify-center items-center" style={{paddingTop: safeArea.top}}>
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2 ">Movie App</Text>
      {/* Carrusel de Imagenes */}
      <MainSlideShow movies={getNowPlayingQuery.data || []} />
      {/* Popular */}
      <MovieHorizontalList title={"Peliculas mas Populares"} movies={getPopularQuery.data || []} />
      {/* Top Rated */}
      <MovieHorizontalList title={"Top rated"} movies={getTopRated.data || []} />
      {/* Upcoming */}
      <MovieHorizontalList title={"Upcoming"} movies={getUpcoming.data || []} />
    </View>
  );
};

export default HomeScreen;
