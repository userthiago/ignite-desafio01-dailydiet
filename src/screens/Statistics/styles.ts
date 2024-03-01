import styled, { css } from "styled-components/native";

export const HeaderContainer = styled.View`
  position: relative;

  padding: 24px;
`;

export const StatisticsGroupRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const StatisticsTitle = styled.Text`
  margin-bottom: 10px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
  `}
`;
