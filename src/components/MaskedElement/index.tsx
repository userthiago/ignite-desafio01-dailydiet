import React from "react";
import { View } from "react-native";

import { StyledLinearGradient } from "./styles";

export function MaskedElement() {
  return (
    <View style={{ backgroundColor: "transparent", flex: 1 }}>
      <StyledLinearGradient
        start={{ x: 1, y: 0.8 }}
        end={{ x: 1, y: 1 }}
        colors={["#FFFFFF", "#FFFFFF00"]}
      />
    </View>
  );
}
