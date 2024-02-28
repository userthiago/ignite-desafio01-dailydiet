import { Avatar } from "@components/Avatar";
import { HeaderContainer, Logo } from "./styles";
import logoImg from "@assets/logo.png";

export function HomeHeader() {
  return (
    <HeaderContainer>
      <Logo source={logoImg} />
      <Avatar />
    </HeaderContainer>
  );
}
