import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./global.css";

// Create a client
const queryClient = new QueryClient();
export default function RootLayout() {
  //nowPlayingAction();
  return (
    <QueryClientProvider client={queryClient}>
      
        {/* <Slot /> */}
        <Stack screenOptions={{ headerShown: false }} />
      
    </QueryClientProvider>
  );
}
