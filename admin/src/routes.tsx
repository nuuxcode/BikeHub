import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import DataTables from "views/admin/user";
import ManageBikes from "views/admin/bike";
import ManageParks from "views/admin/park";
import ManageRentals from "views/admin/rental";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdLock,
  MdElectricBike,
  MdLocalParking,
  MdFace,
} from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Manage Users",
    layout: "/admin",
    icon: <MdFace className="h-6 w-6" />,
    path: "users",
    component: <DataTables />,
  },
  {
    name: "Manage Bikes",
    layout: "/admin",
    icon: <MdElectricBike className="h-6 w-6" />,
    path: "bikes",
    component: <ManageBikes />,
  },
  {
    name: "Manage Parks",
    layout: "/admin",
    icon: <MdLocalParking className="h-6 w-6" />,
    path: "parks",
    component: <ManageParks />,
  },
  {
    name: "Manage Rentals",
    layout: "/admin",
    icon: <FaFileInvoiceDollar className="h-6 w-6" />,
    path: "rentals",
    component: <ManageRentals />,
  },
  {
    name: "Log Out",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
