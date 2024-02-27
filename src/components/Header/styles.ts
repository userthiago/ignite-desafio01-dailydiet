import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Logo = styled.Image`
  height: 37px;
  width: 82px;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;
