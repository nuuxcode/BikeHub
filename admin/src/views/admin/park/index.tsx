import AdminTable from "../user/components/AdminTable";
import { useEffect, useState } from "react";

const columnHeaders = [
  {
    id: "id",
    title: "ID",
  },
  {
    id: "name",
    title: "Name",
  },
  {
    id: "location",
    title: "Location",
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
        `${process.env.REACT_APP_API_URL}parks`,
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
        moduleName={"park"}
      />
    </div>
  );
};

export default Tables;
