import styled from "styled-components/native";

export const DatepickerContainer = styled.View`
  flex: 1;
  padding: 24px;
`;

export const ButtonGroupContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
`;

export const Title = styled.Text`
  margin-bottom: 24px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
