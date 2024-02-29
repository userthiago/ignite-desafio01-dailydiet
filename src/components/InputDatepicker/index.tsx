import { Pressable, TextInputProps } from "react-native";
import { useRef, useState } from "react";
import { Datepicker, DatepickerModeTypes } from "@components/Datepicker";
import { Modalize } from "react-native-modalize";
import { InputContainer, InputLabel, StyledInput } from "./styles";

type InputProps = Omit<TextInputProps, "onChange"> & {
  title: string;
  value: string;
  mode?: DatepickerModeTypes;
  handleOnChange: (date: string) => void;
};

export function InputDatepicker({
  title,
  style,
  mode = "date",
  value,
  handleOnChange,
  ...rest
}: InputProps) {
  const ref = useRef<Modalize>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  function handleOpenDatepicker() {
    ref.current?.open();
    setDatePickerVisibility(true);
  }

  function handleCloseDatepicker() {
    ref.current?.close();
    setDatePickerVisibility(false);
  }

  return (
    <>
      <InputContainer style={style}>
        <InputLabel>{title}</InputLabel>
        <Pressable onPress={handleOpenDatepicker}>
          <StyledInput
            editable={false}
            value={value}
            onPressIn={handleOpenDatepicker}
            {...rest}
          />
        </Pressable>
      </InputContainer>
      <Datepicker
        title={title}
        datepickerRef={ref}
        isDatepickerVisible={isDatePickerVisible}
        onChange={handleOnChange}
        onCloseDatepicker={handleCloseDatepicker}
        value={value}
        mode={mode}
      />
    </>
  );
}
