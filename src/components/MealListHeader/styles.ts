import styled, { css } from "styled-components/native";

export const MealListHeaderText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: 130%;
  `}
`;
