import { useState } from "react";
import Calendar from "react-calendar";
import "./assets/Calendar2.css";

function CalendarRDV() {
  const [date, setDate] = useState(new Date());
  const timeStart = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  return (
    <div className="h-full">
      <Calendar onChange={setDate} value={date} />
      <div className="flex gap-20 justify-center mt-3">
        <div className="flex flex-col items-center gap-1">
          <h4>Horaires</h4>
          <div className="flex flex-wrap justify-center gap-2 w-[340px]">
            {timeStart.map((time) => (
              <h4 className="rounded-lg w-14 text-black text-center active:bg-violet-one active:text-white cursor-pointer">
                {time}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarRDV;
