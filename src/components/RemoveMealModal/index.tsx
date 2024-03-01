import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";

import { Button } from "@components/Button";

import { mealRemoveById } from "@storage/meal/meal-remove-by-id";

import {
  RemoveMealModalActionGroup,
  RemoveMealModalContainer,
  RemoveMealModalText,
} from "./styles";

type RemoveMealModalProps = {
  removeMealModalRef: React.RefObject<Modalize>;
  id: string;
};

export function RemoveMealModal({
  id,
  removeMealModalRef,
}: RemoveMealModalProps) {
  const navigation = useNavigation();

  const handleRemoveMeal = async () => {
    await mealRemoveById(id);
    removeMealModalRef.current?.close();
    navigation.navigate("home");
  };

  return (
    <Portal>
      <Modalize
        ref={removeMealModalRef}
        panGestureEnabled={false}
        handleStyle={{ backgroundColor: "transparent" }}
        adjustToContentHeight
        modalStyle={{
          justifyContent: "center",
          backgroundColor: "transparent",
          marginBottom: "auto",
        }}
      >
        <RemoveMealModalContainer>
          <RemoveMealModalText>
            Deseja realmente excluir o registro da refeição?
          </RemoveMealModalText>
          <RemoveMealModalActionGroup>
            <Button
              label="Cancelar"
              variant="secondary"
              onPress={() => removeMealModalRef.current?.close()}
              style={{
                width: Dimensions.get("window").width / 2 - 54,
              }}
            />
            <Button
              label="Sim, excluir"
              onPress={handleRemoveMeal}
              style={{
                width: Dimensions.get("window").width / 2 - 54,
              }}
            />
          </RemoveMealModalActionGroup>
        </RemoveMealModalContainer>
      </Modalize>
    </Portal>
  );
}
