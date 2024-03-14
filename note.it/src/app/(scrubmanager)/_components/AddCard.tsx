import React, { useState } from "react";
import { Input, Flex } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

interface AddCardProps {
  addCard: (title: string) => void;
}

const AddCard: React.FC<AddCardProps> = ({ addCard }) => {
  const [title, setTitle] = useState("");

  const handleAddCard = () => {
    if (title.trim() !== "") {
      addCard(title);
      setTitle("");
    }
  };

  return (
    <div className="px-2 gap-x-2">
      <Flex padding="2" marginBottom="4" className="">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter card title"
          marginRight="20"
        />
        <Button onClick={handleAddCard} className="rounded-full">
          Add Card
        </Button>
      </Flex>
    </div>
  );
};

export default AddCard;
