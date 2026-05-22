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
      <View className="flex-1 items-center justify-center bg-white px-6">
        {/* <Slot /> */}
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </QueryClientProvider>
  );
}
