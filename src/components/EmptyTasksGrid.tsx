import { Button, useDisclosure } from "@chakra-ui/react";
import CreateNewTaskForm from "./CreateNewTaskForm";

const EmptyTasksGrid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CreateNewTaskForm isOpen={isOpen} onClose={onClose} />
      <div className="flex flex-col justify-center items-center mt-[10rem] md:mt-[20rem]">
        <h3 className="text-gray text-small my-2">
          Planning on doing something?
        </h3>
        <Button
          className="my-4 w-[75%] md:w-auto"
          colorScheme="purple"
          bgColor={"darkBlue"}
          color={"white"}
          onClick={onOpen}
        >
          Create Task
        </Button>
      </div>
    </>
  );
};

export default EmptyTasksGrid;
