import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import styled, { css } from "styled-components/native";

export const FeedbackContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex: 1;

  padding: 24px;
`;

type FeedbackTitleProps = {
  variant: AccomplishmentTypes;
};

export const FeedbackTitle = styled.Text<FeedbackTitleProps>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
  `}

  ${({ theme, variant }) => {
    if (variant === "SUCCESS") {
      return css`
        color: ${theme.COLORS.GREEN_DARK};
      `;
    }
    if (variant === "FAILURE") {
      return css`
        color: ${theme.COLORS.RED_DARK};
      `;
    }

    return css`
      color: ${theme.COLORS.GRAY_200};
    `;
  }}
`;

export const FeedbackTextGroup = styled.View`
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
`;

export const FeedbackText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `}
`;

export const FeedbackTextBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const FeedbackImage = styled.Image`
  height: 288px;
`;
