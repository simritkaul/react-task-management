import { Box, VStack } from "@chakra-ui/react";

interface SignUpProps {
  onSwitchToSignIn: () => void;
}

const SignUpForm = ({ onSwitchToSignIn }: SignUpProps) => {
  return (
    <>
      <VStack spacing={2}>
        <Box fontWeight={"semibold"} as="h2">
          Sign Up
        </Box>
      </VStack>
    </>
  );
};

export default SignUpForm;
