import { Redirect, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    // <>
    //   <Text className="text-3xl font-bold text-black">Movies App</Text>
    //   <Text className="mt-3 text-center text-base text-gray-600">
    //     La ruta inicial ya esta configurada.
    //   </Text>
    // </>
    <Redirect href={"./home"} />
  );
}
