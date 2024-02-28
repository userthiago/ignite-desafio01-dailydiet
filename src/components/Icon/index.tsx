import {
  ArrowLeft,
  ArrowUpRight,
  Plus,
  PencilSimpleLine,
  Trash,
  IconProps as PhosphorIconProps,
} from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export type IconType =
  | "arrowLeft"
  | "arrowUpRight"
  | "plus"
  | "pencilSimpleLine"
  | "trash";

export type IconColorsType = "black" | "white" | "green" | "red";

type IconProps = PhosphorIconProps & {
  name: IconType;
  color?: IconColorsType;
  size?: number;
};

export function Icon({ name, color = "black", size = 24, ...rest }: IconProps) {
  const { COLORS } = useTheme();
  const colors: Record<IconColorsType, string> = {
    black: COLORS.GRAY_100,
    white: COLORS.WHITE,
    green: COLORS.GREEN_DARK,
    red: COLORS.RED_DARK,
  };

  const icon: Record<IconType, React.FC<PhosphorIconProps>> = {
    arrowLeft: ArrowLeft,
    arrowUpRight: ArrowUpRight,
    plus: Plus,
    pencilSimpleLine: PencilSimpleLine,
    trash: Trash,
  };

  const IconComponent = icon[name];

  return <IconComponent size={size} color={colors[color]} {...rest} />;
}
