import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { TaskViewEnum } from "../types/tasks/taskTypes";
import CreateNewTaskForm from "./CreateNewTaskForm";

interface ControlsProps {
  taskView: TaskViewEnum;
  setTaskView: any;
}

const Controls = ({ taskView, setTaskView }: ControlsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tasksCount: number = 5;

  if (!tasksCount) {
    return null;
  }

  return (
    <>
      <CreateNewTaskForm isOpen={isOpen} onClose={onClose} />
      <div className="flex flex-col md:flex-row justify-evenly my-5 px-10 items-center">
        <Button
          className="my-2 w-[90%] md:w-auto"
          colorScheme="purple"
          bgColor={"darkBlue"}
          color={"white"}
          onClick={onOpen}
        >
          Create Task
        </Button>
        <div className="flex gap-4 my-4 md:my-0">
          <Switch
            id="statusSw"
            colorScheme="blue"
            color={"darkPurple"}
            value={taskView}
            checked={true}
            // checked={taskView === TaskViewEnum.status}
            onChange={(e) =>
              setTaskView(
                e.target.checked ? TaskViewEnum.status : TaskViewEnum.standard
              )
            }
          />
          <label
            htmlFor="statusSw"
            className="text-darkBlue text-small font-semibold"
          >
            Arrange By Status
          </label>
        </div>
        <div className="w-[90%] md:w-[25%] my-2 md:my-0">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="darkPurple" />
            </InputLeftElement>
            <Input
              placeholder="Enter search text"
              borderColor={"lightGray"}
              bgColor={"white"}
            />
          </InputGroup>
        </div>
      </div>
    </>
  );
};

export default Controls;
