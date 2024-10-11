import { Box, VStack } from "@chakra-ui/react";

interface SignInProps {
  onSwitchToSignUp: () => void;
}

const SignInForm = ({ onSwitchToSignUp }: SignInProps) => {
  return (
    <>
      <VStack spacing={2}>
        <Box fontWeight={"semibold"} as="h2">
          Sign In
        </Box>
      </VStack>
    </>
  );
};

export default SignInForm;
