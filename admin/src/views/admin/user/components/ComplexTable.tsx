import React from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import { MdEdit, MdDelete } from "react-icons/md";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

// const columns = columnsDataCheck;
const columnHelper = createColumnHelper<any>();

export default function ComplexTable(props: {
  tableData: any;
  columnHeaders: any;
}) {
  const { tableData, columnHeaders } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns = columnHeaders.map((header: any) =>
    columnHelper.accessor(header.id, {
      id: header.id,
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          {header.title}
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    })
  );

  // Add actions column
  let actionId = 0;
  columns.push({
    id: `actions-${actionId++}`,
    Header: () => (
      <p className="text-sm font-bold text-gray-600 dark:text-white">Actions</p>
    ),
    Cell: () => (
      <div className="flex items-center">
        <button className="mr-2 text-blue-500">
          <MdEdit /> Edit
        </button>
        <button className="text-red-500">
          <MdDelete /> Delete
        </button>
      </div>
    ),
  }); // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...tableData]);
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
          Complex Table
        </div>
        <CardMenu />
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
            {table.getRowModel().rows.map((row) => {
              console.log("test");
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="min-w-[150px] border-white/0 py-3  pr-4"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
