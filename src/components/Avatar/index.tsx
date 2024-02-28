import { AvatarContainer, AvatarImage } from "./styles";
import avatarImg from "@assets/avatar.jpeg";

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage source={avatarImg} resizeMode="contain" />
    </AvatarContainer>
  );
}
