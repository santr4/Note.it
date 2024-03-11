import { Navigation } from "@/components/sidebar";

const TodoPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div>
        <Navigation />
      </div>
      <div className="flex w-full justify-center">
        <p className="pt-3 font-bold">To-do List</p>
      </div>
    </div>
  );
};

export default TodoPage;
