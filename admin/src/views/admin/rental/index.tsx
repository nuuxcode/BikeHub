import AdminTable from "../user/components/AdminTable";
import { useEffect, useState } from "react";

const columnHeaders = [
  {
    id: "id",
    title: "ID",
  },
  {
    id: "status",
    title: "Status",
  },
  {
    id: "price",
    title: "Price",
  },
  {
    id: "bike_id",
    title: "Bike ID",
  },
  {
    id: "user_id",
    title: "User ID",
  },
];

const Tables = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}rentals`,
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
        moduleName={"rental"}
      />
    </div>
  );
};

export default Tables;
