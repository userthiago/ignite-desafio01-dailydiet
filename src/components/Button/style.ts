import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonVariantType = "primary" | "secondary";

type ButtonContainerProps = {
  variant: ButtonVariantType;
};

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 16px 24px;
  border-radius: 6px;

  ${({ theme, variant }) =>
    variant === "primary"
      ? css`
          background-color: ${theme.COLORS.GRAY_200};
          border: 1px solid ${theme.COLORS.GRAY_200};
        `
      : css`
          background-color: ${theme.COLORS.WHITE};
          border: 1px solid ${theme.COLORS.GRAY_100};
        `}
`;

export const ButtonText = styled.Text<ButtonContainerProps>`
  ${({ theme, variant }) =>
    variant === "primary"
      ? css`
          color: ${theme.COLORS.WHITE};
          font-size: ${theme.FONT_SIZE.SM}px;
          font-family: ${theme.FONT_FAMILY.BOLD};
        `
      : css`
          color: ${theme.COLORS.GRAY_100};
          font-size: ${theme.FONT_SIZE.SM}px;
          font-family: ${theme.FONT_FAMILY.BOLD};
        `}
`;
