import { useCallback, useState } from "react";
import { Dimensions, Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import moment from "moment";

import { Button } from "@components/Button";

import { ButtonGroupContainer, DatepickerContainer, Title } from "./styles";
import { dateFormat, timeFormat } from "src/config/data-config";

export type DatepickerModeTypes = "date" | "time";

type DatepickerProps = {
  datepickerRef: React.RefObject<Modalize>;
  title: string;
  value: string;
  onChange: (value: string) => void;
  isDatepickerVisible: boolean;
  onCloseDatepicker: () => void;
  mode?: DatepickerModeTypes;
};

export function Datepicker({
  datepickerRef,
  title,
  value,
  onChange,
  isDatepickerVisible,
  onCloseDatepicker,
  mode = "date",
}: DatepickerProps) {
  const [dateValue, setDateValue] = useState<Date>(
    value ? new Date(value) : new Date()
  );
  const maxmiumDate = mode === "date" ? new Date() : undefined;

  const handleOnChange = useCallback(
    ({ type }: DateTimePickerEvent, selectedDate: Date) => {
      if (type === "set") {
        const currentDate = selectedDate;
        setDateValue(currentDate);

        if (Platform.OS === "android") {
          handleConfirm(currentDate);
        }
      } else {
        onCloseDatepicker();
      }
    },
    []
  );

  const handleConfirm = (newDate?: Date) => {
    const date = newDate ?? dateValue;
    const value =
      mode === "date"
        ? moment(date).format(dateFormat)
        : moment(date).format(timeFormat);
    onChange(value);
    onCloseDatepicker();
  };

  if (Platform.OS === "android") {
    return (
      isDatepickerVisible && (
        <DateTimePicker
          display="spinner"
          value={dateValue}
          mode={mode}
          onChange={handleOnChange}
          maximumDate={maxmiumDate}
          style={{
            height: 150,
          }}
        ></DateTimePicker>
      )
    );
  }

  return (
    <Portal>
      <Modalize
        ref={datepickerRef}
        snapPoint={350}
        panGestureEnabled={false}
        handleStyle={{ backgroundColor: "transparent" }}
      >
        <DatepickerContainer>
          <Title>{title}</Title>
          <DateTimePicker
            display="spinner"
            value={dateValue}
            mode={mode}
            onChange={handleOnChange}
            maximumDate={maxmiumDate}
            style={{
              height: 150,
            }}
          ></DateTimePicker>
          <ButtonGroupContainer>
            <Button
              label="Cancelar"
              variant="secondary"
              style={{ width: Dimensions.get("window").width / 2 - 34 }}
              onPress={onCloseDatepicker}
            />
            <Button
              label="Confirmar"
              style={{ width: Dimensions.get("window").width / 2 - 34 }}
              onPress={() => handleConfirm()}
            />
          </ButtonGroupContainer>
        </DatepickerContainer>
      </Modalize>
    </Portal>
  );
}
