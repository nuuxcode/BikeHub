import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
type Review = {
  id: number;
  avatar: string;
  name: string;
  tag: string;
  review: string;
};
const CardReview = ({
  review,
  isActive,
}: {
  review: Review;
  isActive: boolean;
}) => {
  return (
    <Box
      className={`flex flex-col justify-start items-center gap-4 bg-white p-8  rounded-lg shadow-lg ${
        !isActive && "opacity-60"
      }`}
    >
      <Text className="flex text-start text-gray-600 font-medium text-base">
        <RiDoubleQuotesL color="teal" />
        <span className="w-fit mx-1"> {review.review}</span>
        <RiDoubleQuotesR className=" self-end" color="teal" />
      </Text>
      <Flex gap={3}>
        <Avatar src={review.avatar} name={review.name} />
        <Box>
          <Text className="text-base font-medium">{review.name}</Text>
          <Text className="text-base font-medium text-teal-500">
            {review.tag}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardReview;
