import { useRef, useEffect } from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import arrow from "../../../assets/images/arrow.webp";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  Icon: IconType;
  title: string;
  text: string;
  after?: boolean;
  delay?: number;
};

const CardSteps = ({ Icon, title, text, after, delay = 0.5 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center items-center gap-4"
      variants={{
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: delay }}
    >
      <Center
        className="w-20 h-20 relative text-teal-500  bg-gray-100 shadow-xl rounded-lg cursor-pointer hover:shadow-teal-300 hover:text-white hover:bg-gradient-to-t from-teal-400 to-teal-600 ease-out hover:ease-in transition duration-300"
        _after={{
          content: `${after ? "url(" + arrow + ")" : '""'}`,
          display: "block",
          position: "absolute",
          left: "100px",
          top: "15px",
        }}
      >
        <Icon className=" w-9 h-9" />
      </Center>
      <Heading as="h2" size="md" fontWeight={"semibold"}>
        {title}
      </Heading>
      <Text className="w-4/5 text-center text-gray-600 font-medium">
        {text}
      </Text>
    </motion.div>
  );
};

export default CardSteps;
