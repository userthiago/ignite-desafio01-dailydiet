import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Icon, IconColorsType, IconType } from "@components/Icon";

type ButtonIconProps = TouchableOpacityProps & {
  name: IconType;
  color?: IconColorsType;
};

export function ButtonIcon({
  name,
  color = "black",
  ...rest
}: ButtonIconProps) {
  return (
    <TouchableOpacity {...rest}>
      <Icon name={name} color={color} size={24} />
    </TouchableOpacity>
  );
}
