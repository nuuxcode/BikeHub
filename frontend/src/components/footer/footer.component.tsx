import { Box, Button, Flex, Image, Link as A } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logov2.png";

const Footer = () => {
  const footerItems = [
    { label: "Choose us", path: "#chooseUs" },
    { label: "How To Rent", path: "#howToRent" },
    { label: "We Offer", path: "#weOffer" },
    { label: "Clients", path: "#clients" },
  ];
  return (
    <footer className="bg-white dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex sm:flex-row flex-col  items-center md:justify-between">
          <Link to="/">
            <Image src={logoImage} width={"150px"} />
          </Link>
          <Flex gap="8" mr={35} flexDirection={{ base: "column", md: "row" }}>
            <Link to="/">
              <Button
                paddingStart={0}
                paddingEnd={0}
                className="group hover:text-teal-500 focus:text-teal-500"
                variant="nav"
                _hover={{ transition: "all 0.3s ease-in-out" }}
                pos={"relative"}
              >
                Home
                <Box
                  position={"absolute"}
                  className="w-0 h-[2px] bg-teal-500 rounded-xl bottom-0 left-0"
                  _groupFocus={{ width: "100%" }}
                  _groupHover={{
                    width: "100%",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              </Button>
            </Link>

            {footerItems.map((item, i) => (
              <A key={i} href={window.location.origin + "/" + item.path}>
                <Button
                  paddingStart={0}
                  paddingEnd={0}
                  className="group hover:text-teal-500 focus:text-teal-500"
                  variant="nav"
                  _hover={{ transition: "all 0.3s ease-in-out" }}
                  pos={"relative"}
                >
                  {item.label}
                  <Box
                    position={"absolute"}
                    className="w-0 h-[2px] bg-teal-500 rounded-xl bottom-0 left-0"
                    _groupFocus={{ width: "100%" }}
                    _groupHover={{
                      width: "100%",
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                </Button>
              </A>
            ))}
          </Flex>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            BikeHub
          </Link>
          . All Rights Reserved.<br />
          <Link to="https://github.com/nuuxcode/BikeHub" className="hover:underline">Made with ❤️ by nuuX & Ayoub & Bio.</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
