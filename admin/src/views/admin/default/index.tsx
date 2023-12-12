import { useEffect, useState } from "react";

import MiniCalendar from "components/calendar/MiniCalendar";
import { MdElectricBike, MdLocalParking, MdFace } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";

import Widget from "components/widget/Widget";

import { User, Park, Bike, Rental } from "@prisma/client";
import TopCustomers from "./components/TopCustomers";
import HistoryTable from "./components/HistoryTable";
import RevenueChart from "./components/RevenueChart";
import BikeTierPie from "./components/BikeTierPie";

type Stats = {
  users: User[];
  parks: Park[];
  bikes: Bike[];
  rentals: Rental[];
};

const Dashboard = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = ["/v1/users", "/v1/parks", "/v1/bikes", "/v1/rentals"];

        const allRequests = urls.map((url) =>
          fetch(process.env.REACT_APP_API_URL + url, { credentials: "include" })
        );
        const responses = await Promise.all(allRequests);
        const data = await Promise.all(
          responses.map((response) => response.json())
        );

        setStats({
          users: data[0],
          parks: data[1],
          bikes: data[2],
          rentals: data[3],
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Widget
          icon={<MdElectricBike className="h-7 w-7" />}
          title={"Bikes"}
          subtitle={stats?.bikes.length.toString()}
        />
        <Widget
          icon={<MdLocalParking className="h-6 w-6" />}
          title={"Parks"}
          subtitle={stats?.parks.length.toString()}
        />
        <Widget
          icon={<MdFace className="h-7 w-7" />}
          title={"Users"}
          subtitle={stats?.users.length.toString()}
        />
        <Widget
          icon={<FaFileInvoiceDollar className="h-6 w-6" />}
          title={"Rentals"}
          subtitle={stats?.rentals.length.toString()}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TopCustomers />
        <HistoryTable />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div className="grid">
          <RevenueChart />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <BikeTierPie />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>

        {/* Complex Table , Task & Calendar */}

        {/* Task chart & Calendar */}
      </div>
    </div>
  );
};

export default Dashboard;
