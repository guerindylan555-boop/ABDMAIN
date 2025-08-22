"use client";

import * as React from "react";
import {Calendar as HeroCalendar} from "@heroui/react";
import {DateValue} from "@internationalized/date";

export type {DateValue} from "@internationalized/date";

export interface CalendarProps {
  value?: DateValue | null;
  defaultValue?: DateValue | null;
  minValue?: DateValue;
  maxValue?: DateValue;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  visibleMonths?: number;
  firstDayOfWeek?: "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
  showMonthAndYearPickers?: boolean;
  className?: string;
  onChange?: (v: DateValue) => void;
}

export function Calendar(props: CalendarProps) {
  return (
    <HeroCalendar
      aria-label="Sélection de date"
      weekdayStyle="narrow"
      firstDayOfWeek="mon"
      visibleMonths={1}
      showMonthAndYearPickers
      calendarWidth={"100%"}
      isDisabled={false}
      isReadOnly={false}
      {...props}
      // FR locale via le Provider global de HeroUI si configuré;
      // fallback raisonnable sinon
      classNames={{
        base: "block w-full rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur",
        prevButton: "h-9 w-9 rounded-md border border-white/15 bg-white/10 text-white hover:bg-white/15",
        nextButton: "h-9 w-9 rounded-md border border-white/15 bg-white/10 text-white hover:bg-white/15",
        headerWrapper: "mb-3",
        header: "text-center text-base font-semibold",
        title: "text-foreground",
        gridWrapper: "",
        grid: "w-full table-fixed",
        gridHeader: "",
        gridHeaderRow: "",
        gridHeaderCell: "py-2 px-0 text-center text-base font-semibold uppercase text-white leading-none",
        gridBody: "",
        gridBodyRow: "",
        cell: "p-0 text-center align-middle",
        cellButton:
          "inline-flex w-full aspect-square items-center justify-center rounded-md text-base leading-none hover:bg-white/10 data-[selected=true]:bg-white/15 data-[selected=true]:border data-[selected=true]:border-white/20 data-[disabled=true]:opacity-50",
        helperWrapper: "mt-2 text-xs text-muted-foreground",
        errorMessage: "text-xs text-red-400",
      }}
    />
  );
}
