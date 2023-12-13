import { useEffect, useState } from "react";
import axios from "axios";
import Card from "components/card";
import Chart from "react-apexcharts";
import { pieChartOptions } from "variables/charts";

// Define a type for the bike data
type Bike = {
  id: string;
  model: string;
  status: string;
  lock: boolean;
  location: string;
  price_tier: string;
  park_id: number;
  created_at: string;
  updated_at: string;
};

const getColor = (name: string) => {
  switch (name) {
    case "Class A":
      return "bg-[#4318FF]";
    case "Class B":
      return "bg-[#6AD2FF]";
    case "Class C":
      return "bg-[#E26EE5]";
    default:
      return "";
  }
};

const BikeTierPie = () => {
  const [chartData, setChartData] = useState<{ name: string; data: number }[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}bikes`,
          {
            withCredentials: true,
          }
        );
        console.log("-response------------")
        console.log(response)
        console.log("-------------")
        const bikes: Bike[] = response.data;

        // Count bikes by price tier
        const bikeCounts: { [priceTier: string]: number } = {};
        bikes.forEach((bike) => {
          if (bike.price_tier in bikeCounts) {
            bikeCounts[bike.price_tier]++;
          } else {
            bikeCounts[bike.price_tier] = 1;
          }
        });

        // Prepare chart data
        const chartData = Object.keys(bikeCounts).map((priceTier) => ({
          name: `Class ${priceTier}`,
          data: bikeCounts[priceTier],
        }));

        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Tier Price
          </h4>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <Chart
          options={pieChartOptions}
          series={chartData.map((item) => item.data)}
          type="pie"
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        {chartData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center">
              <div className={`h-2 w-2 rounded-full ${getColor(item.name)}`} />
              <p className="ml-1 text-sm font-normal text-gray-600">
                {item.name}
              </p>
            </div>
            <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">
              {item.data}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BikeTierPie;
