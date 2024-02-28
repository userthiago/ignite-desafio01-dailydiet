import { LayoutContainer } from "@components/LayoutContainer";
import { Header } from "@components/Header";
import { ScreenContent } from "@components/ScreenContent";
import { Text } from "react-native";

export function RegisterMeal() {
  return (
    <LayoutContainer variant={"NEUTRAL"}>
      <Header title="Nova refeição" />
      <ScreenContent>
        <Text>Teste</Text>
      </ScreenContent>
    </LayoutContainer>
  );
}
