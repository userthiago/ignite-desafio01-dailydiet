import { LayoutContainer } from "@components/LayoutContainer";
import { Alert, Dimensions, Text, TouchableOpacity } from "react-native";

import { Header } from "@components/Header";
import { ScreenContent } from "@components/ScreenContent";
import { Input } from "@components/Input";
import {
  ActionAreaContainer,
  GroupColumnContainer,
  GroupRowContainer,
  GroupTitle,
} from "./styles";
import { InputDatepicker } from "@components/InputDatepicker";
import { useState } from "react";
import { Button } from "@components/Button";
import { InputRadio } from "@components/InputRadio";
import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import { useNavigation } from "@react-navigation/native";

export function RegisterMeal() {
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

  const handleRegisterMeal = () => {
    if (
      nameValue.trim().length === 0 ||
      descriptionValue.trim().length === 0 ||
      dateValue.length === 0 ||
      timeValue.length === 0 ||
      radioValue.length === 0
    ) {
      Alert.alert("Nova refeição", "É necessário preencher todos os campos.");
    } else {
      navigation.navigate("home");
    }
  };

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
          <Button label="Cadastrar refeição" onPress={handleRegisterMeal} />
        </ActionAreaContainer>
      </ScreenContent>
    </LayoutContainer>
  );
}
