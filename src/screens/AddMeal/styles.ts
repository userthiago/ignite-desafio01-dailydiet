import styled, { css } from "styled-components/native";

export const GroupRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const GroupColumnContainer = styled.View`
  width: 100%;
  gap: 8px;
`;

export const GroupTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ActionAreaContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
