import { useState } from "react";
import ButtonComponent from "../UI/Button/Button";
import FormComponent from "../UI/Form/Form";
import InputComponent from "../UI/Input/Input";
import useAuthStore from "@store/authStore";
import SpinnerComponent from "@components/UI/Spinner/Spinner";

const LoginComponent = () => {
  const { isLoading, login } = useAuthStore();
  // const [useName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <FormComponent onSubmit={handleLogin} className="flex flex-row">
      <InputComponent
        type="email"
        placeholder="Enter your email"
        isRequired
        value={email}
        className="w-full"
        aria-label="Enter your email"
        onChange={onChangeEmail}
      />
      <InputComponent
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        onClear={() => console.log("Clear")}
        type="password"
        placeholder="Enter your password"
        isRequired
        value={password}
        className="w-full"
        aria-label="Enter your password"
        onChange={onChangePassword}
      />
      <ButtonComponent
        className="w-full"
        onPress={handleLogin}
        isLoading={isLoading}
        spinner={<SpinnerComponent color="danger" />}
        spinnerPlacement="start"
      >
        {isLoading ? "" : "Login"}
      </ButtonComponent>
    </FormComponent>
  );
};

export default LoginComponent;
