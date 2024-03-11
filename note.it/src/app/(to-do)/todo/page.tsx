import { Navigation } from "@/components/sidebar";
import Todo from "../_components/todolist";

const TodoPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex flex-col px-96 max-w-[1300px] mx-auto w-full justify-center">
        <p className="pt-3 font-bold pb-4">To-do List</p>
        <Todo />
      </div>
    </div>
  );
};

export default TodoPage;
