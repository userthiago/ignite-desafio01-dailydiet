import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

export type InputRadiosVariantTypes = Exclude<AccomplishmentTypes, "NEUTRAL">;

type ContainerProps = {
  isSelected: boolean;
  variant: InputRadiosVariantTypes;
};

export const InputRadioContainer = styled(TouchableOpacity)<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  height: 50px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0 16px;

  ${({ theme, isSelected, variant }) => {
    if (variant === "SUCCESS" && isSelected) {
      return css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
        border-color: ${theme.COLORS.GREEN_DARK};
      `;
    }
    if (variant === "FAILURE" && isSelected) {
      return css`
        background-color: ${theme.COLORS.RED_LIGHT};
        border-color: ${theme.COLORS.RED_DARK};
      `;
    }
  }}
`;

export const InputRadioText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

type InputRadioBulletProps = {
  variant: InputRadiosVariantTypes;
};

export const InputRadioBullet = styled.View<InputRadioBulletProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;

  ${({ theme, variant }) => {
    if (variant === "SUCCESS") {
      return css`
        background-color: ${theme.COLORS.GREEN_DARK};
      `;
    }
    if (variant === "FAILURE") {
      return css`
        background-color: ${theme.COLORS.RED_DARK};
      `;
    }
  }}
`;
