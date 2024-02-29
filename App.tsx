import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Host } from "react-native-portalize";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "src/theme";
import { Routes } from "src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Host>
          <StatusBar backgroundColor="transparent" translucent />
          {fontsLoaded ? <Routes /> : <Text>Loading</Text>}
        </Host>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
