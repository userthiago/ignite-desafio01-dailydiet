import { TouchableOpacityProps } from "react-native-gesture-handler";
import {
  InputRadioBullet,
  InputRadioContainer,
  InputRadioText,
  InputRadiosVariantTypes,
} from "./styles";

type InputRadioProps = TouchableOpacityProps & {
  title: string;
  variant: InputRadiosVariantTypes;
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
      <InputRadioBullet variant={variant} />
      <InputRadioText>{title}</InputRadioText>
    </InputRadioContainer>
  );
}
