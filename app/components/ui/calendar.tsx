"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

// Minimal wrapper to match the Calendar API used in the app
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar(props: CalendarProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5">
      <DayPicker {...props} />
    </div>
  );
}

export default Calendar;
