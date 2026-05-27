import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Create a client
const queryClient = new QueryClient();
export default function RootLayout() {
  //nowPlayingAction();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        {/* <Slot /> */}
        <Stack screenOptions={{ headerShown: false }} />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
