import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const InputContainer = styled.View`
  gap: 4px;
`;

type InputProps = {
  focus?: boolean;
};

export const StyledInput = styled(TextInput)<InputProps>`
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  ${({ theme, focus }) =>
    focus &&
    css`
      border-color: ${theme.COLORS.GRAY_100};
    `}
`;

export const InputLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
