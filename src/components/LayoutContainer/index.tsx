import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import { StyledLayoutContainer } from "./styles";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import { Keyboard } from "react-native";

type ContainerProps = SafeAreaViewProps & {
  variant?: AccomplishmentTypes;
};

export function LayoutContainer({
  children,
  variant,
  ...rest
}: ContainerProps) {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();

  return (
    <StyledLayoutContainer
      edges={["top", "right", "left"]}
      variant={variant}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}
      {...rest}
    >
      {children}
    </StyledLayoutContainer>
  );
}
