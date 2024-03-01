import avatarImg from "@assets/avatar.jpeg";

import { AvatarContainer, AvatarImage } from "./styles";

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage source={avatarImg} resizeMode="contain" />
    </AvatarContainer>
  );
}
