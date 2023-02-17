import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const toast = useToast();
  function handleSubmit(e) {
    e.preventDefault();

    if (content) {
      const todo = {
        id: nanoid(),
        body: content,
      };
      addTodo(todo);
      setContent("");
    } else {
      toast({
        title: "No content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }
  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant={"filled"}
          placeholder="write what to do"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
