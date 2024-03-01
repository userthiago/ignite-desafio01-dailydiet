import { TouchableOpacityProps } from "react-native";

import { Icon, IconColorsType, IconType } from "@components/Icon";

import { ButtonContainer, ButtonText, ButtonVariantType } from "./style";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  variant?: ButtonVariantType;
  icon?: IconType;
};

export function Button({
  label,
  variant = "primary",
  icon,
  ...rest
}: ButtonProps) {
  const iconVariant: Record<ButtonVariantType, IconColorsType> = {
    primary: "white",
    secondary: "black",
  };

  return (
    <ButtonContainer variant={variant} {...rest}>
      {icon && <Icon name={icon} color={iconVariant[variant]} size={18} />}
      <ButtonText variant={variant}>{label}</ButtonText>
    </ButtonContainer>
  );
}
