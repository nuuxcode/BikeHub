import AdminTable from "./components/AdminTable";
import { useEffect, useState } from "react";

const columnHeaders = [
  {
    id: "id",
    title: "ID",
  },
  {
    id: "name",
    title: "NAME",
  },
  {
    id: "role",
    title: "Role",
  },
  {
    id: "created_at",
    title: "Joined At",
  },
];

const Tables = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}users`,
        { credentials: "include" }
      );
      console.log("-response------------")
      console.log(response)
      console.log("-------------")
      const data = await response.json();
      console.log("-response------------")
      console.log(data)
      console.log("-------------")
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <AdminTable
        tableContent={tableData}
        tableHeader={columnHeaders}
        moduleName={"user"}
      />
    </div>
  );
};

export default Tables;
