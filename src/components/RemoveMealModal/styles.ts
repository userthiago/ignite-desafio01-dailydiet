import styled, { css } from "styled-components/native";

export const RemoveMealModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  border-radius: 8px;
  margin: 0 24px;
`;

export const RemoveMealModalText = styled.Text`
  ${({ theme }) => css`
    margin-top: 16px;

    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
  `}
`;

export const RemoveMealModalActionGroup = styled.View`
  flex-direction: row;
  gap: 12px;
`;
