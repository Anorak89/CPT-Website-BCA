import { useState } from "react";

const CalendarBox = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleGoToToday = () => {
    setCurrentDate(new Date());
  };

  type CalendarDay = {
    day: number;
    isCurrentMonth: boolean;
    isToday: boolean;
  };

  const days: CalendarDay[] = [];
  
  // previous month trailing days
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push({
      day: prevMonthDays - firstDayOfMonth + i + 1,
      isCurrentMonth: false,
      isToday: false
    });
  }

  // current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday =
      i === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();

    days.push({
      day: i,
      isCurrentMonth: true,
      isToday: isToday
    });
  }

  // next month leading days to complete the 42 grid cells (6 rows of 7 days)
  const remainingCells = 42 - days.length;
  for (let i = 1; i <= remainingCells; i++) {
    days.push({
      day: i,
      isCurrentMonth: false,
      isToday: false
    });
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // A couple of recurring/fake events for demonstration
  const sampleEvents = [
    { day: 15, title: "Weekly Practice", time: "4:00 PM - 5:30 PM", span: "200%" },
    { day: 26, title: "USACO Contest", time: "All Day", span: "300%" }
  ];

  return (
    <div className="w-full max-w-full rounded-[10px] bg-[#0b1228] shadow-1 border border-[#0f1a3a] p-4">
      {/* Calendar Header with Controls */}
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-xl font-bold text-white">
          {monthNames[month]} {year}
        </h2>
        <div className="flex space-x-2">
          <button onClick={handlePrevMonth} className="px-4 py-2 bg-[#0f1a3a] text-sm font-medium text-white rounded hover:bg-[#15234b] transition">
            Prev
          </button>
          <button onClick={handleGoToToday} className="px-4 py-2 bg-[#0f1a3a] text-sm font-medium text-white rounded hover:bg-[#15234b] transition">
            Today
          </button>
          <button onClick={handleNextMonth} className="px-4 py-2 bg-[#0f1a3a] text-sm font-medium text-white rounded hover:bg-[#15234b] transition">
            Next
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-7 rounded-t-[10px] bg-[#0f1a3a] text-white">
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, idx) => (
              <th
                key={idx}
                className={`flex h-15 items-center justify-center p-1 text-body-xs font-medium sm:text-base xl:p-5 ${
                  idx === 0 ? "rounded-tl-[10px]" : ""
                } ${idx === 6 ? "rounded-tr-[10px]" : ""}`}
              >
                <span className="hidden lg:block"> {day} </span>
                <span className="block lg:hidden"> {day.substring(0, 3)} </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <tr key={rowIndex} className="grid grid-cols-7">
              {days.slice(rowIndex * 7, (rowIndex + 1) * 7).map((dayObj, colIndex) => {
                let radiusClass = "";
                if (rowIndex === 5 && colIndex === 0) radiusClass = "rounded-bl-[10px]";
                if (rowIndex === 5 && colIndex === 6) radiusClass = "rounded-br-[10px]";

                const event = dayObj.isCurrentMonth ? sampleEvents.find(e => e.day === dayObj.day) : null;

                return (
                  <td
                    key={colIndex}
                    className={`ease relative h-20 cursor-pointer border border-[#0f1a3a] p-2 transition duration-500 hover:bg-[#0f1a3a] md:h-25 md:p-6 xl:h-31 ${radiusClass} ${
                      !dayObj.isCurrentMonth ? "opacity-30" : ""
                    } ${dayObj.isToday ? "bg-[#0f1a3a]/80" : ""}`}
                  >
                    <span
                      className={`font-medium ${
                        dayObj.isToday ? "text-primary font-bold bg-[#15234b] px-2 py-1 rounded-full text-white" : "text-white"
                      }`}
                    >
                      {dayObj.day}
                    </span>
                    
                    {event && (
                      <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                        <span className="group-hover:text-primary md:hidden text-xs text-white/50">
                          More
                        </span>
                        <div
                          className={`event invisible absolute left-2 z-99 mb-1 flex flex-col rounded-r-[5px] border-l-[3px] border-primary bg-[#0f1a3a] px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 md:visible md:opacity-100 shadow-md`}
                          style={{ width: event.span }}
                        >
                          <span className="event-name font-medium text-white text-sm md:text-base">
                            {event.title}
                          </span>
                          <span className="time text-xs text-white/70">
                            {event.time}
                          </span>
                        </div>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBox;
