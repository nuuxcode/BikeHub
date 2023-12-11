import { Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineUserDelete } from "react-icons/ai";
// import DeleteUserForm from "./partials/deleteUserForm.component";
// import UpdatePassword from "./partials/updatePasswordForm.component";
// import UpdateInfoPers from "./partials/updateInfoForm.component";
import { Link, Outlet, useNavigate } from "react-router-dom";


enum ActiveComponent {
  info = "info",
  pass = "pass",
  del = "del",
}

const SettingProfile: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>(
    ActiveComponent.info
  );

  const navigate = useNavigate();
  useEffect(() => {
    navigate("information");
  }, []);

  /**
   * handleClick: A function to handle button click events.
   *
   * @param component - The component to display when the button is clicked.
   */
  const handleButtonClick = (component: ActiveComponent) => {
    setActiveComponent(component);
  };
  return (
    <div className="py-20 px-28 h-[75vh]">
      <Grid
        templateColumns="repeat(5, 1fr)"
        justifyContent={"space-between"}
        gap={6}
      >
        <GridItem
          // boxShadow={"xl"}
          className="flex flex-col gap-4 shadow-xl"
          colSpan={2}
          justifySelf={"center"}
          borderRadius={"lg"}
          w="300px"
          h={"fit-content"}
          p={5}
        >
          <Link to="information">
            <Button
              className="w-full flex justify-start gap-1"
              variant={"solid"}
              color={
                activeComponent === ActiveComponent.info ? "white" : "gray.500"
              }
              colorScheme={
                activeComponent === ActiveComponent.info ? "teal" : "white"
              }
              onClick={() => handleButtonClick(ActiveComponent.info)}
            >
              <BsPersonCircle size={20} />
              Personal information
              <MdKeyboardArrowRight size={22} className=" ml-auto mr-0" />
            </Button>
          </Link>
          <Link to="updatePassword">
            <Button
              className="w-full flex justify-start gap-1"
              variant={"solid"}
              colorScheme={
                activeComponent === ActiveComponent.pass ? "teal" : "white"
              }
              color={
                activeComponent === ActiveComponent.pass ? "white" : "gray.500"
              }
              onClick={() => handleButtonClick(ActiveComponent.pass)}
            >
              <RiLockPasswordFill size={20} />
              Update Password
              <MdKeyboardArrowRight size={22} className=" ml-auto mr-0" />
            </Button>
          </Link>
          <Link to="deleteUser">
            <Button
              className="w-full flex justify-start gap-1"
              variant={"solid"}
              colorScheme={
                activeComponent === ActiveComponent.del ? "teal" : "white"
              }
              color={
                activeComponent === ActiveComponent.del ? "white" : "gray.500"
              }
              onClick={() => handleButtonClick(ActiveComponent.del)}
            >
              <AiOutlineUserDelete size={20} />
              Delete Account
              <MdKeyboardArrowRight size={22} className=" ml-auto mr-0" />
            </Button>
          </Link>
        </GridItem>
        <GridItem
          colSpan={3}
          w="100%"
          h={"fit-content"}
          className="flex justify-center items-center shadow-xl rounded-lg"
        >
          {/* {activeComponent === ActiveComponent.info && <UpdateInfoPers />}
          {activeComponent === ActiveComponent.pass && <UpdatePassword />}
          {activeComponent === ActiveComponent.del && (
            <DeleteUserForm className="p-5" />
          )} */}
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};

export default SettingProfile;
