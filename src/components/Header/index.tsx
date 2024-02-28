import { ButtonIcon } from "@components/ButtonIcon";
import { HeaderContainer, Title } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  const handleGoBackHome = () => {
    navigation.navigate("home");
  };

  return (
    <HeaderContainer>
      <ButtonIcon
        name="arrowLeft"
        onPress={handleGoBackHome}
        style={{ position: "absolute", left: 24 }}
      ></ButtonIcon>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}
