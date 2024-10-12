import { Task } from "../types/tasks/taskTypes";
import StandardTaskItem from "./StandardTaskItem";

interface StandardTasksGridProps {
  tasks: Task[];
}

const StandardTasksGrid = ({ tasks }: StandardTasksGridProps) => {
  if (!tasks?.length) return null;

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-[10rem] w-full justify-center md:justify-start mt-2 md:mt-20 px-4 md:px-[10%]">
        {tasks?.map((task) => (
          <StandardTaskItem data={task} />
        ))}
      </div>
    </>
  );
};

export default StandardTasksGrid;
