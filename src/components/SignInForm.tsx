import { Button, Input, Link, Text } from "@chakra-ui/react";

interface SignInProps {
  onSwitchToSignUp: () => void;
}

const SignInForm = ({ onSwitchToSignUp }: SignInProps) => {
  const handleSignUpRedirectionOnClick = (e: any) => {
    e.preventDefault();
    onSwitchToSignUp();
  };

  return (
    <>
      <div className="flex flex-col gap-2 bg-white rounded-custom py-5 px-10">
        <h1 className="font-semibold text-darkBlue text-large">Sign In</h1>
        <div className="my-2">
          <label htmlFor="username" className="text-darkBlue text-small">
            Username
          </label>
          <Input
            id="username"
            placeholder="Enter username"
            borderColor={"lightGray"}
          />
        </div>
        <div className="my-2">
          <label htmlFor="username" className="text-darkBlue text-small">
            Password
          </label>
          <Input
            id="username"
            placeholder="Enter password"
            borderColor={"lightGray"}
            type="password"
          />
        </div>
        <Button
          className="my-2"
          colorScheme="purple"
          bgColor={"darkBlue"}
          color={"white"}
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
      </div>
    </>
  );
};

export default SignInForm;
