import { View, Text } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'


const HomeScreen = () => {
    const {getNowPlayingQuery}=useMovies()
    console.log("index")
  return (
    <View>
      
      <Text>{JSON.stringify(getNowPlayingQuery.data,null,2)} JSON</Text>
    </View>
  )
}

export default HomeScreen