import { Flex, Text } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "./KanbanCard";

interface Cards {
  title: string;
}

interface KanbanLaneProps {
  title: string;
  items: Cards[];
}

const KanbanLane = ({ title, items }: KanbanLaneProps) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });
  return (
    <Flex flex="3" padding="5" flexDirection="column" minH="10rem">
      <Text className="font-bold">{title}</Text>
      <Flex
        ref={setNodeRef}
        borderRadius="8"
        flex="1"
        padding="2"
        flexDirection="column"
        className="bg-violet-200"
      >
        {items.map(({ title: cardTitle }, key) => (
          <KanbanCard title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </Flex>
    </Flex>
  );
};

export default KanbanLane;
