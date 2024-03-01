import styled, { css } from "styled-components/native";

import { AccomplishmentTypes } from "@utils/types/accomplishment-types";

type BulletProps = {
  variant: AccomplishmentTypes;
};

export const Bullet = styled.View<BulletProps>`
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
    return css`
      background-color: ${theme.COLORS.GRAY_400};
    `;
  }}
`;
