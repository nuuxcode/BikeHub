import AdminTable from "../user/components/AdminTable";
import { useEffect, useState } from "react";

const columnHeaders = [
  {
    id: "id",
    title: "ID",
  },
  {
    id: "model",
    title: "Model",
  },
  {
    id: "status",
    title: "Status",
  },
  {
    id: "price_tier",
    title: "Price Tier",
  },
  {
    id: "park_id",
    title: "Park ID",
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
        `${process.env.REACT_APP_API_URL}/v1/bikes`,
        { credentials: "include" }
      );
      const data = await response.json();
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <AdminTable
        tableContent={tableData}
        tableHeader={columnHeaders}
        moduleName={"bike"}
      />
    </div>
  );
};

export default Tables;
