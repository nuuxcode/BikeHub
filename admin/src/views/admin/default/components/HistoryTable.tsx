import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "components/card";
import {
  MdCancel,
  MdCheckCircle,
  MdAccessTimeFilled,
  MdBarChart,
} from "react-icons/md";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

type User = {
  id: string;
  name: string;
};

type Rental = {
  user_id: string;
  status: string;
  created_at: string;
  price: number;
  [key: string]: string | number;
};

const columns = [
  {
    id: "user_id",
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">
        USERNAME
      </p>
    ),
    cell: (info: any) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  },
  {
    id: "status",
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">STATUS</p>
    ),
    cell: (info: any) => (
      <div className="flex items-center">
        {info.getValue() === "completed" ? (
          <MdCheckCircle className="me-1 text-green-500 dark:text-green-300" />
        ) : info.getValue() === "lost" ? (
          <MdCancel className="me-1 text-red-500 dark:text-red-300" />
        ) : info.getValue() === "ongoing" ? (
          <MdAccessTimeFilled className="me-1 text-amber-500 dark:text-amber-300" />
        ) : null}
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      </div>
    ),
  },
  {
    id: "price",
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">PRICE</p>
    ),
    cell: (info: any) => (
      <p className="text-sm font-bold text-navy-700 dark:text-white">
        {info.getValue()}
      </p>
    ),
  },
  {
    id: "created_at",
    header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
    ),
    cell: (info: any) => {
      // Convert the date string to a Date object
      const date = new Date(info.getValue());

      // Format the date as dd/MM/yyyy
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      return (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {formattedDate}
        </p>
      );
    },
  },
];

// const columns = columnsDataCheck;
export default function HistoryTable() {
  const [tableData, setTableData] = useState<Rental[]>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rentalsResponse, usersResponse] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_URL}/v1/rentals`, {
            withCredentials: true,
          }),
          axios.get(`${process.env.REACT_APP_API_URL}/v1/users`, {
            withCredentials: true,
          }),
        ]);

        const rentals: Rental[] = rentalsResponse.data;
        const users: User[] = usersResponse.data;

        // Sort rentals by date and take the last 5
        const sortedRentals = rentals
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(0, 6);

        // Replace user_id with user name
        const rentalsWithUserName = sortedRentals.map((rental) => ({
          ...rental,
          user_id:
            users.find((user) => user.id === rental.user_id)?.name ||
            rental.user_id,
        }));

        setTableData(rentalsWithUserName);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  let defaultData = tableData;

  // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Rents History
        </div>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className="min-w-[150px] border-white/0 py-3  pr-4"
                  >
                    {column.cell({ getValue: () => row[column.id] })}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
