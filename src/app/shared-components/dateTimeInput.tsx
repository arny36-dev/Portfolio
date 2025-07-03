import React from "react";
import DatePicker, { registerLocale } from "react-datepicker"; // ← správne
import "react-datepicker/dist/react-datepicker.css";
import { sk } from "date-fns/locale";
import { setHours, setMinutes, startOfDay } from "date-fns"; // ← len tieto patria sem

registerLocale("sk", sk);

interface DateTimeInputProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
  minDate?: Date;
}

export default function DateTimeInput({
  value,
  onChange,
  placeholder,
  minDate,
}: DateTimeInputProps) {
  const parseDate = (val: string) => (val ? new Date(val) : null);

  const formatDateForInput = (date: Date): string => {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };

  const now = new Date();
  now.setSeconds(0);
  now.setMilliseconds(0);

  const selectedDate = parseDate(value);
  const isToday =
    selectedDate &&
    minDate &&
    selectedDate.toDateString() === minDate.toDateString();

  const minTime = isToday
    ? now
    : setHours(setMinutes(startOfDay(new Date()), 0), 0);
  const maxTime = setHours(setMinutes(startOfDay(new Date()), 30), 23);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => {
        if (date) onChange(formatDateForInput(date));
      }}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      dateFormat="Pp"
      locale="sk"
      placeholderText={placeholder}
      minDate={minDate}
      minTime={minTime}
      maxTime={maxTime}
      className="w-full mb-2 p-2 border rounded"
    />
  );
}
