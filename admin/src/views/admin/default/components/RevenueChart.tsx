import { useEffect, useState } from "react";
import axios from "axios";
import Card from "components/card";
import { BarChartOptionsTopCustomers } from "variables/charts-config";
import { MdBarChart } from "react-icons/md";
import Chart from "react-apexcharts";

// Define a type for the rental data
type Rental = {
  user_id: string;
  bike_id: string;
  price: number;
  created_at: string;
};

const RevenueChart = () => {
  const [chartData, setChartData] = useState<
    { name: string; data: number[] }[]
  >([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/v1/rentals`,
          {
            withCredentials: true,
          }
        );

        const rentals: Rental[] = response.data;

        // Filter rentals from the last 30 days
        const oneMonthAgo = new Date();
        oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);
        const recentRentals = rentals.filter(
          (rental) => new Date(rental.created_at) >= oneMonthAgo
        );

        // Group rentals by date and calculate total revenue for each date
        const revenueByDate: { [date: string]: number } = {};
        recentRentals.forEach((rental) => {
          const date = rental.created_at.split("T")[0];
          if (date in revenueByDate) {
            revenueByDate[date] += rental.price;
          } else {
            revenueByDate[date] = rental.price;
          }
        });

        // Sort dates and prepare chart data
        const sortedDates = Object.keys(revenueByDate).sort();
        const chartData = {
          name: "Revenue",
          data: sortedDates.map((date) => revenueByDate[date]),
        };

        setChartData([chartData]);
        setDates(sortedDates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Revenue Chart
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="h-full w-full">
          <Chart
            options={BarChartOptionsTopCustomers(dates)}
            series={chartData}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Card>
  );
};

export default RevenueChart;
