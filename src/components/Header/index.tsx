import { ButtonIcon } from "@components/ButtonIcon";
import { HeaderContainer, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  title: string;
  backAction?: "home" | "previous-screen";
};

export function Header({ title, backAction = "previous-screen" }: HeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    return backAction === "home"
      ? navigation.navigate("home")
      : navigation.goBack();
  };

  return (
    <HeaderContainer>
      <ButtonIcon
        name="arrowLeft"
        onPress={handleGoBack}
        style={{ position: "absolute", left: 24 }}
      ></ButtonIcon>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}
