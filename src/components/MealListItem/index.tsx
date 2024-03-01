import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import {
  AccomplishmentStatus,
  Divider,
  MealListItemContainer,
  Time,
  Title,
} from "./styles";

type MealListItemProps = {
  time: string;
  title: string;
  status: AccomplishmentTypes;
  onPress: () => void;
};

export function MealListItem({
  time,
  title,
  status,
  onPress,
}: MealListItemProps) {
  return (
    <MealListItemContainer onPress={onPress}>
      <Time>{time}</Time>
      <Divider />
      <Title numberOfLines={1}>{title}</Title>
      <AccomplishmentStatus variant={status} />
    </MealListItemContainer>
  );
}
