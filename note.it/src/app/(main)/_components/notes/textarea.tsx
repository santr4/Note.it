// import { useState } from "react";
import { Text, Textarea } from "@chakra-ui/react";
// import { db } from "@/app/config/firebase";
// import { collection, addDoc } from "firebase/firestore";

function TextareaComponent({
  value,
  setValue,
}: {
  value: string;
  setValue: (e: string) => void;
}) {
  const handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <div className="pt-16">
      <Text mb="8px">Jot down some text:</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </div>
  );
}

export default TextareaComponent;
