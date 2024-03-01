import React from "react";
import { MaskedViewProps } from "@react-native-community/masked-view";

import { StyledMaskedView } from "./styles";

export function MaskedView({ children, ...rest }: MaskedViewProps) {
  return <StyledMaskedView {...rest}>{children}</StyledMaskedView>;
}
