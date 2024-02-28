import { ViewProps } from "react-native";
import { ScreenContentContainer } from "./styles";

type ScreenContentProps = ViewProps;

export function ScreenContent({ children, ...rest }: ScreenContentProps) {
  return <ScreenContentContainer {...rest}>{children}</ScreenContentContainer>;
}
