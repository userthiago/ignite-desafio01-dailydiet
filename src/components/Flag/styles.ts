import styled, { css } from "styled-components/native";

export const FlagContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  height: 34px;
  padding: 0 16px;
  border-radius: 17px;
`;

export const FlagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
