import { Avatar, HeaderContainer, Logo } from "./styles";
import logoImg from "@assets/logo.png";
import avatarImg from "@assets/avatar.jpeg";

export function Header() {
  return (
    <HeaderContainer>
      <Logo source={logoImg} />
      <Avatar source={avatarImg} />
    </HeaderContainer>
  );
}
