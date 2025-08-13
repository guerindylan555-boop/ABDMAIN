"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { fr } from "date-fns/locale";
import type { Locale } from "date-fns";

// Minimal wrapper to match the Calendar API used in the app
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar(props: CalendarProps) {
  const { locale, ...rest } = props as CalendarProps & { locale?: Locale };
  return (
    <div className="rounded-lg border border-white/10 bg-white/5">
      <DayPicker locale={locale ?? fr} {...(rest as CalendarProps)} />
    </div>
  );
}

export default Calendar;
