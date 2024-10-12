import { useState } from "react";
import Controls from "../components/Controls";
import Navbar from "../components/Navbar";
import { Task, TaskStatus, TaskViewEnum } from "../types/tasks/taskTypes";
import StandardTasksGrid from "../components/StandardTasksGrid";
import StatusWiseTasksGrid from "../components/StatusWiseTasksGrid";
import EmptyTasksGrid from "../components/EmptyTasksGrid";

interface TasksProps {
  onSwitchToAuth: () => void;
}

const Tasks = ({ onSwitchToAuth }: TasksProps) => {
  const [taskView, setTaskView] = useState<TaskViewEnum>(TaskViewEnum.standard);

  const tasks: Task[] = [
    {
      id: "98eh",
      title: "Do work",
      description: "Some coding",
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: "382h",
      title: "Watch football",
      description: "UEFA Nations League",
      status: TaskStatus.NEW,
    },
    {
      id: "29hud23",
      title: "Buy Milk",
      description: "Eggs too",
      status: TaskStatus.COMPLETE,
    },
    {
      id: "ioi0r2",
      title: "Relax",
      description: "Watch something",
      status: TaskStatus.NEW,
    },
  ];

  console.log(taskView);

  return (
    <>
      <Navbar onSwitchToAuth={onSwitchToAuth} />
      <Controls taskView={taskView} setTaskView={setTaskView} />
      {taskView === TaskViewEnum.standard && (
        <StandardTasksGrid tasks={tasks} />
      )}
      {taskView === TaskViewEnum.status && (
        <StatusWiseTasksGrid tasks={tasks} />
      )}
      {!tasks?.length && <EmptyTasksGrid />}
    </>
  );
};

export default Tasks;
