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
      <div className="flex flex-col md:flex-row justify-evenly items-center min-h-screen">
        <h1 className="font-bold text-darkBlue text-extraLarge">
          Task Management
        </h1>
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
      </div>
    </>
  );
};

export default Auth;
