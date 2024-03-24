import { Navigation } from "@/components/sidebar";
import Todo from "../_components/todolist";

const TodoPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex flex-col px-96 max-w-[1300px] mx-auto w-full justify-start pt-12">
        <p className="pb-8 font-bold text-2xl">
          Task List: Stay organized and productive
        </p>
        <p className="pt-3 font-bold pb-4 text-lime-500">To-do List</p>
        <Todo />
      </div>
    </div>
  );
};

export default TodoPage;
