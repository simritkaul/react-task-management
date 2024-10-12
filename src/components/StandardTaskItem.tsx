import { Select } from "@chakra-ui/react";
import { Task, TaskStatus } from "../types/tasks/taskTypes";

interface StandardTaskItemProps {
  data: Task;
}

const StandardTaskItem = ({ data }: StandardTaskItemProps) => {
  const statusDropdownOptions = [
    {
      id: TaskStatus.NEW,
      label: "New",
    },
    {
      id: TaskStatus.IN_PROGRESS,
      label: "In Progress",
    },
    {
      id: TaskStatus.COMPLETE,
      label: "Complete",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center bg-white text-darkBlue rounded-custom px-6 py-5 min-w-[20rem]">
        <h2 className="font-semibold my-2 text-medium">{data.title}</h2>
        <div className="mt-5 md:mt-10">
          <label htmlFor="status"></label>
          <Select
            className="my-2"
            id="status"
            placeholder="Select option"
            value={data.status}
            borderColor={"lightgray"}
          >
            {statusDropdownOptions?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

export default StandardTaskItem;
