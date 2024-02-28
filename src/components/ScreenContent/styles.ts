import styled from "styled-components/native";

export const ScreenContentContainer = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 40px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
