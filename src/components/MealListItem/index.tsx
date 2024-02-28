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
};

export function MealListItem({ time, title, status }: MealListItemProps) {
  return (
    <MealListItemContainer>
      <Time>{time}</Time>
      <Divider />
      <Title numberOfLines={1}>{title}</Title>
      <AccomplishmentStatus variant={status} />
    </MealListItemContainer>
  );
}
