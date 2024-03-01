import styled from "styled-components/native";

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  overflow: hidden;
`;

export const AvatarImage = styled.Image`
  flex: 1;
  width: 100%;
  aspect-ratio: 1;
`;
