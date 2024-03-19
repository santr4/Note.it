"use client";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { DeleteIcon } from "@chakra-ui/icons";

export const Button1 = ({ handleSubmit }: { handleSubmit: () => {} }) => {
  return (
    <div className="flex flex-row mt-3 gap-3">
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button onClick={handleSubmit}>Save</Button>
        <IconButton aria-label="Add to friends" icon={<AddIcon />} />
      </ButtonGroup>
      <ButtonGroup variant="outline" size="sm">
        <Button colorScheme="blue">Send</Button>
      </ButtonGroup>
      <IconButton aria-label="delete" size="sm">
        <DeleteIcon />
      </IconButton>
      <Button size="sm">Download</Button>
    </div>
  );
};
