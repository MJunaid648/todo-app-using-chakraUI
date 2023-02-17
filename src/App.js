import { Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function App() {
  const initialTodos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        size={"lg"}
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        alignSelf="flex-end"
        isRound="true"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}
