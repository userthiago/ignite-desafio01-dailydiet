import { TouchableOpacityProps } from "react-native-gesture-handler";

import { Bullet } from "@components/Bullet";

import {
  InputRadioContainer,
  InputRadioText,
  InputRadioVariantTypes,
} from "./styles";

type InputRadioProps = TouchableOpacityProps & {
  title: string;
  variant: InputRadioVariantTypes;
  isSelected: boolean;
};

export function InputRadio({
  title,
  variant,
  isSelected,
  ...rest
}: InputRadioProps) {
  return (
    <InputRadioContainer variant={variant} isSelected={isSelected} {...rest}>
      <Bullet variant={variant} />
      <InputRadioText>{title}</InputRadioText>
    </InputRadioContainer>
  );
}
