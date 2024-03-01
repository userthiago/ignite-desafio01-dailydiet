import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { AccomplishmentTypes } from "@utils/types/accomplishment-types";

export const MealListItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  gap: 12px;

  padding: 14px 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Divider = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  height: 14px;
  width: 1px;
`;

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

type AccomplishmentStatusProps = {
  variant: AccomplishmentTypes;
};

export const AccomplishmentStatus = styled.View<AccomplishmentStatusProps>`
  height: 14px;
  width: 14px;
  border-radius: 7px;

  ${({ theme, variant }) => {
    if (variant === "SUCCESS") {
      return css`
        background-color: ${theme.COLORS.GREEN_MID};
      `;
    }
    if (variant === "FAILURE") {
      return css`
        background-color: ${theme.COLORS.RED_MID};
      `;
    }

    return css`
      background-color: ${theme.COLORS.GRAY_400};
    `;
  }};
`;
