import { View, Text } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies'


const HomeScreen = () => {
    const {getNowPlayingQuery}=useMovies()
  return (
    <View>
      <Text>index</Text>
      <Text>{JSON.stringify(getNowPlayingQuery.data,null,2)}</Text>
    </View>
  )
}

export default HomeScreen