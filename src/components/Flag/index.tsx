import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import { FlagContainer, FlagText } from "./styles";
import { Bullet } from "@components/Bullet";

type FlagProps = {
  text: string;
  status: AccomplishmentTypes;
};

export function Flag({ text, status }: FlagProps) {
  return (
    <FlagContainer>
      <Bullet variant={status} />
      <FlagText>{text}</FlagText>
    </FlagContainer>
  );
}
