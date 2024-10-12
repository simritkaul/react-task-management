import { useState } from "react";
import Controls from "../components/Controls";
import Navbar from "../components/Navbar";
import { TaskViewEnum } from "../types/tasks/taskTypes";
import StandardTasksGrid from "../components/StandardTasksGrid";
import StatusWiseTasksGrid from "../components/StatusWiseTasksGrid";

interface TasksProps {
  onSwitchToAuth: () => void;
}

const Tasks = ({ onSwitchToAuth }: TasksProps) => {
  const [taskView, setTaskView] = useState<TaskViewEnum>(TaskViewEnum.standard);

  console.log(taskView);

  return (
    <>
      <Navbar onSwitchToAuth={onSwitchToAuth} />
      <Controls taskView={taskView} setTaskView={setTaskView} />
      {taskView === TaskViewEnum.standard && <StandardTasksGrid />}
      {taskView === TaskViewEnum.status && <StatusWiseTasksGrid />}
    </>
  );
};

export default Tasks;
