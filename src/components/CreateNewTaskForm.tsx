import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";

interface CreateNewTaskFormProps {
  isOpen: any;
  onClose: any;
}

const CreateNewTaskForm = ({ isOpen, onClose }: CreateNewTaskFormProps) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    // validationSchema: Yup.object({
    //   username: Yup.string()
    //     .min(4, "Username must be at least 6 characters")
    //     .max(20, "Username must be at most 20 characters")
    //     .required("Required"),
    //   password: Yup.string()
    //     .min(8, "Password must be at least 6 characters")
    //     .max(32, "Password must be at most 32 characters")
    //     .matches(
    //       /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    //       "Password is too weak"
    //     )
    //     .required("Required"),
    // }),
    onSubmit: (values) => {
      // dispatch(signIn(values));
      console.log(values);
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="text-darkBlue font-semibold text-medium">
          Create new Task
        </ModalHeader>
        <ModalCloseButton color={"darkBlue"} />
        <ModalBody pb={6}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-2 bg-white rounded-custom py-5 px-2">
              <div className="my-2">
                <label htmlFor="title" className="text-darkBlue text-small">
                  Title
                </label>
                <Input
                  id="title"
                  placeholder="Enter the title"
                  borderColor={"lightGray"}
                  value={formik.values.title}
                  onChange={(e) =>
                    formik.setFieldValue("title", e.target.value)
                  }
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="description"
                  className="text-darkBlue text-small"
                >
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Enter the description"
                  borderColor={"lightGray"}
                  value={formik.values.description}
                  onChange={(e) =>
                    formik.setFieldValue("description", e.target.value)
                  }
                />
              </div>
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="purple"
            mr={3}
            bgColor={"darkBlue"}
            color={"white"}
          >
            Save
          </Button>
          <Button color={"darkBlue"} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateNewTaskForm;
