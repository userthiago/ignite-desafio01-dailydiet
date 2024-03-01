import styled, { css } from "styled-components/native";

export const HeaderContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
