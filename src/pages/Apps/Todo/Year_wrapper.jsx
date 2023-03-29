import React, { useState } from "react";
import Todo_wrapper from "./Todo_wrapper";
import {v4 as uuidV4} from "uuid"

function Year_wrapper({ year, months, data }) {
  const [showMonths, setShowMonths] = useState(false);
  const id = uuidV4()
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
                <Todo_wrapper todos_inMonth={data[month]} month={month} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Year_wrapper;
