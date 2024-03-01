import styled, { css } from "styled-components/native";

export const MealListHeaderText = styled.Text`
  padding-top: 20px;
  padding-bottom: 8px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
