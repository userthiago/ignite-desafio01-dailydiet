import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import styled, { css } from "styled-components/native";

type BoxProps = {
  variant: AccomplishmentTypes;
};

export const Box = styled.View<BoxProps>`
  position: relative;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 16px;
  border-radius: 8px;

  ${({ theme, variant }) => {
    if (variant === "SUCCESS") {
      return css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
      `;
    }
    if (variant === "FAILURE") {
      return css`
        background-color: ${theme.COLORS.RED_LIGHT};
      `;
    }
    return css`
      background-color: ${theme.COLORS.GRAY_600};
    `;
  }}
`;
