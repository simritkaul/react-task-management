import { Button, Input, Link, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "../redux/authSlice";
import { RootState, useAppDispatch } from "../redux/store";

interface SignInProps {
  onSwitchToSignUp: () => void;
  onSwitchToTasks: () => void;
}

const SignInForm = ({ onSwitchToSignUp, onSwitchToTasks }: SignInProps) => {
  const dispatch = useAppDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
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
      onSwitchToTasks();
    },
  });

  const handleSignUpRedirectionOnClick = (e: any) => {
    e.preventDefault();
    onSwitchToSignUp();
  };

  return (
    <>
      <div className="flex flex-col gap-2 bg-white rounded-custom py-5 px-10">
        <h1 className="font-semibold text-darkBlue text-large">Sign In</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-2">
            <label htmlFor="username" className="text-darkBlue text-small">
              Username
            </label>
            <Input
              id="username"
              placeholder="Enter username"
              borderColor={"lightGray"}
              value={formik.values.username}
              onChange={(e) => formik.setFieldValue("username", e.target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="username" className="text-darkBlue text-small">
              Password
            </label>
            <Input
              id="password"
              placeholder="Enter password"
              borderColor={"lightGray"}
              type="password"
              value={formik.values.password}
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
            />
          </div>
          <Button
            className="my-2"
            colorScheme="purple"
            bgColor={"darkBlue"}
            color={"white"}
            type="submit"
            isLoading={loading}
          >
            Sign In
          </Button>
          <Text className="text-center text-gray">
            New Here?{" "}
            <Link
              color="darkPurple"
              href=""
              onClick={handleSignUpRedirectionOnClick}
            >
              Sign Up
            </Link>
          </Text>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
