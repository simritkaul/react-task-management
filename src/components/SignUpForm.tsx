import { Button, Input, Link, Text } from "@chakra-ui/react";

interface SignUpProps {
  onSwitchToSignIn: () => void;
}

const SignUpForm = ({ onSwitchToSignIn }: SignUpProps) => {
  const handleSignInRedirectionOnClick = (e: any) => {
    e.preventDefault();
    onSwitchToSignIn();
  };
  return (
    <>
      <div className="flex flex-col gap-2 bg-white rounded-custom py-5 px-10">
        <h1 className="font-semibold text-darkBlue text-large">Sign Up</h1>
        <div className="my-2">
          <label htmlFor="firstname" className="text-darkBlue text-small">
            First Name
          </label>
          <Input
            id="firstname"
            placeholder="Enter your first name"
            borderColor={"lightGray"}
            isRequired={true}
          />
        </div>
        <div className="my-2">
          <label htmlFor="lastname" className="text-darkBlue text-small">
            Last Name
          </label>
          <Input
            id="lastname"
            placeholder="Enter your last name"
            borderColor={"lightGray"}
            isRequired={true}
          />
        </div>
        <div className="my-2">
          <label htmlFor="username" className="text-darkBlue text-small">
            Username
          </label>
          <Input
            id="username"
            placeholder="Enter username"
            borderColor={"lightGray"}
            isRequired={true}
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
            isRequired={true}
          />
        </div>
        <Button
          className="my-2"
          colorScheme="purple"
          bgColor={"darkBlue"}
          color={"white"}
        >
          Sign Up
        </Button>
        <Text className="text-center text-gray">
          Already signed up?{" "}
          <Link
            color="darkPurple"
            href=""
            onClick={handleSignInRedirectionOnClick}
          >
            Sign In
          </Link>
        </Text>
      </div>
    </>
  );
};

export default SignUpForm;
