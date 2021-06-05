import React, { useState, useEffect } from "react";
import moment from "moment";
import CalendarHeader from "./header";
import "./styles.css";
import DayList from '../dayList/DayList';
import M from "materialize-css";

const Calendar = ({ value, onChange }) => {

  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    M.AutoInit();
    setCalendar(buildCalendar(value));
  }, [value]);

  function buildCalendar(date) {
    const a = [];

    const startDay = date.clone().startOf("month").startOf("week");
    const endDay = date.clone().endOf("month").endOf("week");

    const _date = startDay.clone().subtract(1, "day");

    while (_date.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => _date.add(1, "day").clone())
      );
    }
    return a;
  }
console.log(value._d)
  const isSelected = (day) => {
    return value.isSame(day, "day");
  }

  const beforeToday = (day) => {
    return moment(day).isBefore(new Date(), "day");
  }

  const isToday = (day) => {
    return moment(new Date()).isSame(day, "day");
  }

  const dayStyles = (day) => {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }
  
  const dayNames = ["s", "m", "t", "w", "t", "f", "s"];

  const idDay = (value._d.toString());
  const xIdDay = idDay.split(" ")[2];
  const xIdMonth = idDay.split(" ")[1];
  const xIdYear = idDay.split(" ")[3];
const wholeId = (xIdDay+ xIdMonth + xIdYear).toString();

  return (
    <div className="calendar container">
      <CalendarHeader value={value} onChange={onChange} />
      <div className="body">
        <div className="day-names">
          {dayNames.map((d, index) => (
            <div key={index} className="week">{d}</div>
          ))}
        </div>
        {calendar.map((week, weekNumber) => (
          <div key={weekNumber}>
            {week.map((day, dayNumber) => (
              <div
                key={dayNumber}
                className="day"
                onClick={() => {
                  if (day < moment(new Date()).startOf("day")) return;
                  onChange(day);
                }}
              >
                <div className={dayStyles(day)}>
                {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <DayList day={xIdDay} id={wholeId} />
    </div>
  );
}


export default Calendar;

