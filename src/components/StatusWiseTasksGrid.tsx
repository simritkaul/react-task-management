import { Task } from "../types/tasks/taskTypes";

interface StatusWiseTasksGridProps {
  tasks: Task[];
}

const StatusWiseTasksGrid = ({ tasks }: StatusWiseTasksGridProps) => {
  if (!tasks?.length) return null;
  return <div>StatusWiseTasksGrid</div>;
};

export default StatusWiseTasksGrid;
