import React from "react";

const CalendarHeader = ({ value, onChange }) => {
  const currMonthName = () => {
    return value.format("MMMM");
  }

  const currYear = () => {
    return value.format("YYYY");
  }

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  }

  const nextMonth = () => { 
    return value.clone().add(1, "month");
  }

  const thisMonth = () => {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className="header">
      <div
        className="previous"
        onClick={() => !thisMonth() && onChange(prevMonth())}
      >
        {!thisMonth() ?   <i className="material-icons">arrow_back</i>
          : null}
      </div>
      <div className="current">
        {currMonthName()} {currYear()}
      </div>
      <div className="next" onClick={() => onChange(nextMonth())}>
        <i className="material-icons">arrow_forward</i>
      </div>
    </div>
  );
}

export default CalendarHeader;
