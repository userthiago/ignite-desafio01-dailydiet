import { useCallback, useState } from "react";
import { Alert, Dimensions } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { ScreenContent } from "@components/ScreenContent";
import { LayoutContainer } from "@components/LayoutContainer";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { InputDatepicker } from "@components/InputDatepicker";
import { Button } from "@components/Button";
import { InputRadio } from "@components/InputRadio";

import { mealGetById } from "@storage/meal/meal-get-by-id";
import { mealUpdate } from "@storage/meal/meal-update";
import { MealStorageDTO } from "@storage/meal/meal-storage-dto";
import { AppError } from "@utils/app-error";
import { AccomplishmentTypes } from "@utils/types/accomplishment-types";

import {
  ActionAreaContainer,
  GroupColumnContainer,
  GroupRowContainer,
  GroupTitle,
} from "./styles";

type RouteParams = {
  id: string;
};

export function EditMeal() {
  const { params } = useRoute();
  const { id } = params as RouteParams;
  const [isLoading, setLoading] = useState(true);
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [radioValue, setRadioValue] = useState<AccomplishmentTypes | "">("");
  const navigation = useNavigation();

  const handleChangeNameValue = (value: string) => {
    setNameValue(value);
  };
  const handleChangeDescriptionValue = (value: string) => {
    setDescriptionValue(value);
  };
  const handleChangeDateValue = (value: string) => {
    setDateValue(value);
  };

  const handleChangeTimeValue = (value: string) => {
    setTimeValue(value);
  };

  const handleChangeRadioValue = (value: AccomplishmentTypes) => {
    setRadioValue(value);
  };

  const handleSetMealData = (data: MealStorageDTO) => {
    handleChangeNameValue(data.title);
    handleChangeDescriptionValue(data.description);
    handleChangeDateValue(data.date);
    handleChangeTimeValue(data.time);
    handleChangeRadioValue(data.status);
  };

  const fetchMealData = async () => {
    try {
      setLoading(true);
      const data = await mealGetById(id);
      handleSetMealData(data);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Editar Refeição", error.message, [
          {
            text: "Ok",
            onPress: () => {
              navigation.navigate("home");
            },
          },
        ]);
      } else {
        Alert.alert(
          "Editar Refeição",
          "Não foi possível carregar as informações da refeição selecionada.",
          [
            {
              text: "Ok",
              onPress: () => {
                navigation.navigate("home");
              },
            },
          ]
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEditMeal = async () => {
    if (
      !nameValue.trim() ||
      !descriptionValue.trim() ||
      !dateValue ||
      !timeValue ||
      !radioValue
    ) {
      Alert.alert("Editar refeição", "É necessário preencher todos os campos.");
    } else {
      try {
        const newMeal: MealStorageDTO = {
          id: id,
          title: nameValue.trim(),
          description: descriptionValue.trim(),
          date: dateValue,
          status: radioValue,
          time: timeValue,
        };

        await mealUpdate(newMeal);
        navigation.navigate("mealdata", { id: id });
      } catch (error) {
        if (error instanceof AppError) {
          Alert.alert("Editar refeição", error.message);
        } else {
          console.log(error);

          Alert.alert(
            "Editar refeição",
            "Não foi possível editar a refeição selecionada."
          );
        }
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealData();
    }, [])
  );

  if (isLoading) {
    return (
      <LayoutContainer variant={"NEUTRAL"}>
        <Header title="Nova refeição" />
        <ScreenContent style={{ gap: 20 }}>
          <GroupTitle>
            Aguarde, estamos carregando os dados da refeição.
          </GroupTitle>
        </ScreenContent>
      </LayoutContainer>
    );
  }

  return (
    <LayoutContainer variant={"NEUTRAL"}>
      <Header title="Nova refeição" />
      <ScreenContent style={{ gap: 20 }}>
        <Input
          title="Nome"
          value={nameValue}
          onChangeText={handleChangeNameValue}
        />
        <Input
          title="Descrição"
          variant="textarea"
          value={descriptionValue}
          onChangeText={handleChangeDescriptionValue}
        />
        <GroupRowContainer>
          <InputDatepicker
            title="Data"
            style={{ width: Dimensions.get("window").width / 2 - 34 }}
            value={dateValue}
            handleOnChange={handleChangeDateValue}
          />
          <InputDatepicker
            title="Hora"
            style={{ width: Dimensions.get("window").width / 2 - 34 }}
            value={timeValue}
            mode="time"
            handleOnChange={handleChangeTimeValue}
          />
        </GroupRowContainer>
        <GroupColumnContainer>
          <GroupTitle>Está dentro da dieta</GroupTitle>
          <GroupRowContainer>
            <InputRadio
              variant="SUCCESS"
              isSelected={radioValue === "SUCCESS"}
              title="Sim"
              style={{ width: Dimensions.get("window").width / 2 - 34 }}
              onPress={() => handleChangeRadioValue("SUCCESS")}
            />
            <InputRadio
              variant="FAILURE"
              isSelected={radioValue === "FAILURE"}
              title="Não"
              style={{ width: Dimensions.get("window").width / 2 - 34 }}
              onPress={() => handleChangeRadioValue("FAILURE")}
            />
          </GroupRowContainer>
        </GroupColumnContainer>
        <ActionAreaContainer>
          <Button label="Salvar alterações" onPress={handleEditMeal} />
        </ActionAreaContainer>
      </ScreenContent>
    </LayoutContainer>
  );
}
