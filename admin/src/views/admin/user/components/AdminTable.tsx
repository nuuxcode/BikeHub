import React, { useState } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import { AiFillEdit, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import DrawerEdit from "./DrawerEdit";
import ModalCreate from "./ModelCreate";

type ColumnHeader = {
  id: string;
  title: string;
};

type Props = {
  tableContent: any[];
  tableHeader: ColumnHeader[];
  moduleName: string;
};

const AdminTable: React.FC<Props> = ({
  tableHeader,
  tableContent,
  moduleName,
}) => {
  const data = React.useMemo(() => tableContent, [tableContent]);
  const columns = React.useMemo(
    () =>
      tableHeader.map((header) => ({
        Header: header.title,
        accessor: header.id,
        Cell:
          header.id === "created_at"
            ? (cellInfo: { value: string }) => {
                const date = new Date(cellInfo.value);
                return (
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    {date.toLocaleDateString()}
                  </p>
                );
              }
            : (cellInfo: { value: string }) => (
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {cellInfo.value}
                </p>
              ),
      })),
    [tableHeader]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { sortBy: [{ id: "id", desc: false }] } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  // eslint-disable-next-line
  const [editData, setEditData] = useState(null);
  const handleEdit = (row: any) => {
    setEditData({ module: moduleName, id: row.id });
  };

  const handleClose = () => {
    setEditData(null);
  };

  const handleDelete = async (row: any) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${moduleName} with ID: ${row.id} ?`
    );
    if (confirmDelete) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/v1/${moduleName}s/${moduleName}/${row.id}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    }
  };

  return (
    <div className="h-full w-full px-6 pb-6 sm:overflow-x-auto">
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}s Table
        </div>
        <ModalCreate module={moduleName}>
          <button className="flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-400">
            <AiOutlinePlus />
            Create
          </button>
        </ModalCreate>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="!border-px !border-gray-400"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
                  >
                    <div className="text-md items-center justify-between dark:text-white">
                      {column.render("Header")}
                      {/* Add a sort direction indicator */}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </div>
                  </th>
                ))}
                <th className="text-left dark:text-white">Actions</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="min-w-[150px] border-white/0 py-3 pr-4 dark:text-red-500"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                  <td className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(row.original)}
                      className="flex items-center gap-1 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-400"
                    >
                      <AiFillEdit />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(row.original)}
                      className="flex items-center gap-1 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-400 disabled:cursor-not-allowed"
                      disabled={moduleName === "user"}
                    >
                      <AiFillDelete />
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <DrawerEdit
        key={editData?.id}
        isOpen={!!editData}
        onClose={() => {
          handleClose();
        }}
        data={editData}
      />
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-lg dark:text-white">
          <b>
            {pageIndex + 1} / {pageCount}
          </b>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminTable;
