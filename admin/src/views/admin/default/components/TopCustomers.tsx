import { useEffect, useState } from "react";
import axios from "axios";
import Card from "components/card";
import { BarChartOptionsTopCustomers } from "variables/charts-config";
import { MdBarChart } from "react-icons/md";
import Chart from "react-apexcharts";

interface User {
  id: string;
  name: string;
}

interface Rental {
  user_id: string;
  bike_id: string;
}

const TopCustomers = () => {
  const [customerNames, setCustomerNames] = useState<string[]>([]);
  const [chartData, setChartData] = useState<
    { name: string; data: number[] }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rentalsResponse, usersResponse] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_URL}rentals`, {
            withCredentials: true,
          }),
          axios.get(`${process.env.REACT_APP_API_URL}users`, {
            withCredentials: true,
          }),
        ]);
        console.log("-response usersResponse------------")
        console.log(usersResponse.data)
        console.log("-response rentalsResponse------------")
        console.log(rentalsResponse.data)
        console.log("-------------")
        const rentals: Rental[] = rentalsResponse.data;
        const users: User[] = usersResponse.data;
        console.log("rentals", rentals)
        console.log("usersx", users)
        console.log("usersx lenght", users.length)
        // Count rentals by user
        const rentalCounts: { [userId: string]: number } = {};
        let num = 0;
        rentals.forEach((rental) => {
          console.log("---------")
          console.log(rental.user_id)
          if (rental.user_id in rentalCounts) {
            rentalCounts[rental.user_id]++;
          } else {
            rentalCounts[rental.user_id] = 1;
          }
          console.log(rentalCounts[rental.user_id])
          console.log("lop:", num++)
        });
        console.log("rentalCounts", rentalCounts)
        console.log("rental lenght", rentalCounts.length)
        // Sort users by rental count and take top 5
        const sortedUsers = users
          .sort((a, b) => {
            const countA = rentalCounts[a.id] || 0;
            const countB = rentalCounts[b.id] || 0;
            console.log(`Comparing ${a.id}: ${countA} with ${b.id}: ${countB}`);
            return countB - countA;
          })
          .slice(0, 5);
        console.log("sortedUsers", sortedUsers)
        console.log("sorteduser lenght", sortedUsers.length)
        const chartDataTransform = {
          name: "Rents Count",
          data: sortedUsers.map((user) => rentalCounts[user.id]),
        };
        console.log("chartDataTransform", chartDataTransform)
        const customerNames = sortedUsers.map((user) => user.name);
        console.log(sortedUsers)
        setChartData([chartDataTransform]);
        setCustomerNames(customerNames);
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
          Top Customersx
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-teal-600 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="h-full w-full">
          <Chart
            options={BarChartOptionsTopCustomers(customerNames)}
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

export default TopCustomers;
