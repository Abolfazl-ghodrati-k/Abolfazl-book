import React, { useState } from "react";
import TodoWrapper from "./TodoWrapper";

function YearWrapper({ year, months, data }) {
  const [showMonths, setShowMonths] = useState(false);
  return (
    <div className="w-full mt-2">
      <h1
        onClick={() => setShowMonths(!showMonths)}
        className="p-2 text-[white] text-[1.1rem] bg-fill cursor-pointer"
      >
        {year}
      </h1>
      {showMonths &&
        months?.map((month) => (
          <div className="relative w-full h-full">
            <div className="year-wrapper w-full h-full">
              <div className="ml-2 py-1">
                <TodoWrapper todos_inMonth={data[month]} month={month} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default YearWrapper;
