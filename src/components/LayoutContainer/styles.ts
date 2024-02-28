import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "styled-components";
import styled from "styled-components/native";

type ContainerProps = {
  variant?: AccomplishmentTypes;
};

export const StyledLayoutContainer = styled(SafeAreaView)<ContainerProps>`
  flex: 1;

  width: 100%;

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

    if (variant === "NEUTRAL") {
      return css`
        background-color: ${theme.COLORS.GRAY_500};
      `;
    }

    return css`
      background-color: ${theme.COLORS.WHITE};
    `;
  }}
`;
