import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CardSlider = ({
  img,
  text1,
  text2,
  title,
  sousTitle,
}: {
  img: string;
  text1: string;
  text2: string;
  title: string;
  sousTitle: string;
}) => {
  // const itemVariants = {
  //   closed: {
  //     opacity: 0,
  //   },
  //   open: { opacity: 1 },
  // };
  return (
    <Flex
      position={"relative"}
      bgImage={img}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      width={"full"}
      height={"full"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={6}
    >
      <Box
        className="bg-gray-600 opacity-25 z-0"
        w={"full"}
        h={"full"}
        position={"absolute"}
      ></Box>
      {/* <Box
          bgImage={img}
          width={500}
          height={505}
          borderRadius={"29% 71% 26% 74% / 41% 25% 75% 59% "}
          className=" shadow-lg shadow-teal-200
           bg-cover bg-center"
        ></Box> */}
      <motion.p
        className="text-teal-500 text-lg font-bold  px-2 z-10 mb-4"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      >
        {sousTitle}
      </motion.p>
      <motion.p
        className="text-gray-50 text-6xl font-bold z-10"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 1.5 }}
      >
        {title}
      </motion.p>
      <motion.div
        className="w-16 h-1 rounded-xl bg-teal-100 z-10"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 2.5 }}
      />
      <Box>
        <motion.p
          className="text-gray-50 text-lg font-semibold z-10"
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 3.5 }}
        >
          {text1}
        </motion.p>
        <motion.p
          className="text-gray-50 text-lg font-semibold z-10"
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 4 }}
        >
          {text2}
        </motion.p>
      </Box>
    </Flex>
  );
};

export default CardSlider;
