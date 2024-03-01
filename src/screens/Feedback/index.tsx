import { useNavigation, useRoute } from "@react-navigation/native";

import { LayoutContainer } from "@components/LayoutContainer";
import { Button } from "@components/Button";

import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import successImg from "@assets/success.png";
import failureImg from "@assets/failure.png";

import {
  FeedbackContainer,
  FeedbackImage,
  FeedbackText,
  FeedbackTextBold,
  FeedbackTextGroup,
  FeedbackTitle,
} from "./styles";

type RouteParams = {
  type: AccomplishmentTypes;
};

export function Feedback() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { type } = params as RouteParams;

  const handleGoBackHome = () => {
    navigation.navigate("home");
  };

  const feedbackContent = () => {
    if (type === "SUCCESS") {
      return (
        <>
          <FeedbackTextGroup>
            <FeedbackTitle variant="SUCCESS">Continue assim!</FeedbackTitle>
            <FeedbackText>
              Você continua <FeedbackTextBold>dentro da dieta</FeedbackTextBold>
              . Muito bem!
            </FeedbackText>
          </FeedbackTextGroup>
          <FeedbackImage source={successImg} />
        </>
      );
    }
    if (type === "FAILURE") {
      return (
        <>
          <FeedbackTextGroup>
            <FeedbackTitle variant="FAILURE">Que pena!</FeedbackTitle>
            <FeedbackText>
              Você <FeedbackTextBold>saiu da dieta</FeedbackTextBold> dessa vez,
              mas continue se esforçando e não desista!
            </FeedbackText>
          </FeedbackTextGroup>
          <FeedbackImage source={failureImg} />
        </>
      );
    }

    return (
      <FeedbackTextGroup>
        <FeedbackTitle variant="NEUTRAL">Registro de Refeição</FeedbackTitle>
        <FeedbackText>Registro realizado com sucesso!</FeedbackText>
      </FeedbackTextGroup>
    );
  };

  return (
    <LayoutContainer>
      <FeedbackContainer>
        {feedbackContent()}
        <Button label="Ir para a página inicial" onPress={handleGoBackHome} />
      </FeedbackContainer>
    </LayoutContainer>
  );
}
