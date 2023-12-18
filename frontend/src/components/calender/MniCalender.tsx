import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/css/minicalender.css";
// import "assets/css/MiniCalendar.css";
import { Text, Icon, Box } from "@chakra-ui/react";
// Chakra imports
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// Custom components

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function MiniCalendar(props: {
  selectRange: boolean;
  [x: string]: any;
}) {
  const { selectRange, ...rest } = props;
  const [date, setDate] = useState<Value>(new Date());
  return (
    <Box
      alignItems="center"
      flexDirection="column"
      borderRadius={"xl"}
      shadow={"xl"}
      w="full"
      // maxW="full"
      p="20px 15px"
      h="max-content"
      {...rest}
    >
      <Calendar
        onChange={setDate}
        value={date}
        selectRange={selectRange}
        view={"month"}
        tileContent={<Text color="brand.500" />}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
    </Box>
  );
}
