import { ApexOptions } from "apexcharts";

export let BarChartOptionsTopCustomers: (
  customerNames: string[]
) => ApexOptions = (customerNames) => {
  return {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
    },
    xaxis: {
      categories: customerNames,
    },
    yaxis: {
      show: false,
      color: "black",
      labels: {
        show: true,
        style: {
          colors: "#CBD5E0",
          fontSize: "14px",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          [
            {
              offset: 0,
              color: "#38B2AC",
              opacity: 1,
            },
            {
              offset: 100,
              color: "rgba(56, 178, 172, 1)",
              opacity: 0.28,
            },
          ],
        ],
      },
    },
    grid: {
      show: false,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    noData: {
      text: "Loading...",
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  };
};
