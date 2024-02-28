import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import { StyledLayoutContainer } from "./styles";
import { SafeAreaViewProps } from "react-native-safe-area-context";

type ContainerProps = SafeAreaViewProps & {
  variant?: AccomplishmentTypes;
};

export function LayoutContainer({
  children,
  variant,
  ...rest
}: ContainerProps) {
  return (
    <StyledLayoutContainer
      edges={["top", "right", "left"]}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledLayoutContainer>
  );
}
