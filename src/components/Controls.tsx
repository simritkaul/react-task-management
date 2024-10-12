import { Input, InputGroup, InputLeftElement, Switch } from "@chakra-ui/react";
import { TaskViewEnum } from "../types/tasks/taskTypes";

interface ControlsProps {
  taskView: TaskViewEnum;
  setTaskView: any;
}

const Controls = ({ taskView, setTaskView }: ControlsProps) => {
  return (
    <>
      <div className="flex justify-evenly my-5 px-10">
        <div className="flex gap-4">
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
        <div className="w-[25%]">
          <InputGroup>
            {/* <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement> */}
            <Input placeholder="Enter search text" />
          </InputGroup>
        </div>
      </div>
    </>
  );
};

export default Controls;
