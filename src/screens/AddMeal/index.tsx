import { LayoutContainer } from "@components/LayoutContainer";
import { Dimensions, Text, TouchableOpacity } from "react-native";

import { Header } from "@components/Header";
import { ScreenContent } from "@components/ScreenContent";
import { Input } from "@components/Input";
import { DateTimeInputGroupContainer } from "./styles";
import { InputDatepicker } from "@components/InputDatepicker";
import { useState } from "react";

export function RegisterMeal() {
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  const handleChangeDateValue = (value: string) => {
    setDateValue(value);
  };

  const handleChangeTimeValue = (value: string) => {
    setTimeValue(value);
  };

  return (
    <LayoutContainer variant={"NEUTRAL"}>
      <Header title="Nova refeição" />
      <ScreenContent style={{ gap: 20 }}>
        <Input title="Nome" />
        <Input title="Descrição" variant="textarea" />
        <DateTimeInputGroupContainer>
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
        </DateTimeInputGroupContainer>
      </ScreenContent>
    </LayoutContainer>
  );
}
