import { useMemo, useState } from "react";
import cx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  parse,
  startOfToday,
} from "date-fns-jalali";

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function App() {
  let today = useMemo(() => startOfToday(), []);
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = useMemo(
    () => parse(currentMonth, "MMM-yyyy", new Date()),
    [currentMonth]
  );

  let days = useMemo(
    () =>
      eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
      }),
    [firstDayCurrentMonth]
  );

  function prevMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="py-28 flex flex-col items-center">
      <div className="max-w-sm w-full flex items-center">
        <h2 className="ss02 flex-auto text-sm font-semibold text-gray-900">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={prevMonth}
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          onClick={nextMonth}
          type="button"
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="max-w-sm w-full mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>ش</div>
        <div>ی</div>
        <div>د</div>
        <div>س</div>
        <div>چ</div>
        <div>پ</div>
        <div>ج</div>
      </div>
      <div className="max-w-sm w-full mt-2 grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={cx("py-2", dayIdx === 0 && colStartClasses[getDay(day)])}
          >
            <button
              type="button"
              onClick={() => setSelectedDay(day)}
              className={cx(
                "h-8 w-8 rounded-full focus:outline-none",
                isEqual(day, selectedDay)
                  ? [
                      isEqual(day, today)
                        ? "text-indigo-300 bg-gray-900 font-semibold"
                        : "bg-gray-900 text-white",
                    ]
                  : [
                      "focus:ring-2 focus:ring-indigo-300",
                      isEqual(day, today)
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-900 hover:bg-gray-200 transition duration-150 ease-in-out",
                    ]
              )}
            >
              <time dateTime={day.toISOString()} className="ss02 leading-none">
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
