import { useState, useEffect } from "react";

function Clock({ timeZone, label }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup function to avoid memory leaks
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-row">
      <div>
        {" "}
        <strong>{label}</strong> -{" "}
      </div>
      <div>{date.toLocaleDateString("en-GB", { timeZone })} </div>
      <div>{date.toLocaleTimeString("en-GB", { timeZone })} </div>
      <div>
        {date.toLocaleDateString("en-GB", { weekday: "long", timeZone })}
      </div>
    </div>
  );
}

export default Clock;
