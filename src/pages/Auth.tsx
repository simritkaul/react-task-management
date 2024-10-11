import { Box, HStack } from "@chakra-ui/react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";
import { AuthProcessTypes } from "../types/auth/authProcessTypes";

interface AuthProps {
  onSwitchToTasks: () => void;
}

const Auth = ({ onSwitchToTasks }: AuthProps) => {
  const [authProcess, setAuthProcess] = useState<AuthProcessTypes>(
    AuthProcessTypes.signIn
  );

  const handleAuthTypeChange = (authType: AuthProcessTypes) => {
    setAuthProcess(authType);
  };

  return (
    <>
      <HStack spacing={2}>
        <Box fontWeight="bold" as="h1" fontSize={"extraLarge"}>
          Task Management
        </Box>
        {authProcess === AuthProcessTypes.signIn && (
          <SignInForm
            onSwitchToSignUp={() =>
              handleAuthTypeChange(AuthProcessTypes.signUp)
            }
          />
        )}
        {authProcess === AuthProcessTypes.signUp && (
          <SignUpForm
            onSwitchToSignIn={() =>
              handleAuthTypeChange(AuthProcessTypes.signIn)
            }
          />
        )}
      </HStack>
    </>
  );
};

export default Auth;
