import styled, { css } from "styled-components/native";

export const StatisticTextContainer = styled.View`
  gap: 8px;
  align-items: center;
`;

export const StatisticTextTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const StatisticTextSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `}
`;
