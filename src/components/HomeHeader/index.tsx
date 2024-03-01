import { Avatar } from "@components/Avatar";

import logoImg from "@assets/logo.png";

import { HeaderContainer, Logo } from "./styles";

export function HomeHeader() {
  return (
    <HeaderContainer>
      <Logo source={logoImg} />
      <Avatar />
    </HeaderContainer>
  );
}
