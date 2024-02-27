import { StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import theme from "src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <Text>Open up App.js to start working on your app!</Text>
      ) : (
        <Text>Loading</Text>
      )}
    </ThemeProvider>
  );
}
