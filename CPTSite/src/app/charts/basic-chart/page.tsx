import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { CampaignVisitors } from "@/components/Charts/campaign-visitors";
import { UsedDevices } from "@/components/Charts/used-devices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Chart",
};

export default function Page() {
  // For static export, we'll use default values
  const defaultTimeFrame = "30d";

  return (
    <>
      <Breadcrumb pageName="Basic Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <UsedDevices
          key="used_devices"
          timeFrame={defaultTimeFrame}
          className="col-span-12 xl:col-span-5"
        />

        <div className="col-span-12 xl:col-span-5">
          <CampaignVisitors />
        </div>
      </div>
    </>
  );
}
