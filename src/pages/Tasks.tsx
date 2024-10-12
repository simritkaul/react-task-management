import Navbar from "../components/Navbar";

interface TasksProps {
  onSwitchToAuth: () => void;
}

const Tasks = ({ onSwitchToAuth }: TasksProps) => {
  return (
    <>
      <Navbar onSwitchToAuth={onSwitchToAuth} />
    </>
  );
};

export default Tasks;
