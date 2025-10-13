import CalendarBox from "@/components/CalendarBox";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function CalendarPage() {
  return (
    <>
      <Breadcrumb pageName="Calendar" />
      <div className="w-full max-w-full rounded-[10px]">
        <CalendarBox />
      </div>
    </>
  );
}