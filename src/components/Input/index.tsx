import { useState } from "react";
import { TextInputProps } from "react-native";

import { InputContainer, InputLabel, InputTypes, StyledInput } from "./styles";

type InputProps = TextInputProps & {
  title: string;
  variant?: InputTypes;
};

export function Input({
  title,
  variant = "input",
  style,
  ...rest
}: InputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <InputContainer style={style}>
      <InputLabel>{title}</InputLabel>
      <StyledInput
        focus={focus}
        variant={variant}
        multiline={variant === "textarea"}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        selectTextOnFocus={false}
        {...rest}
      />
    </InputContainer>
  );
}
