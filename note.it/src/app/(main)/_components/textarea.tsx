import { useState } from "react";
import { Text, Textarea } from "@chakra-ui/react";

function TextareaComponent() {
  let [value, setValue] = useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <div className="pt-16">
      <Text mb="8px">Jot down some text: {value}</Text>
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
