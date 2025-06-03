import { EnterMotion } from "@components/UI/Motion/Motion";
import FormComponent from "@components/UI/Form/Form";
import InputComponent from "@components/UI/Input/Input";
import { Link } from "@heroui/react";
import ButtonComponent from "@components/UI/Button/Button";
import useAuthStore from "@store/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerComponent from "@components/UI/Spinner/Spinner";

const LoginComponent = ({
  setSelectedKey,
}: {
  setSelectedKey: (key: string) => void;
}) => {
  const { isLoading, login } = useAuthStore();
  // const [useName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/");
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
    <EnterMotion>
      <FormComponent
        onSubmit={handleLogin}
        className="flex flex-col items-center gap-4 h-[20rem]"
      >
        <InputComponent
          label="Email"
          type="email"
          placeholder="Enter your email"
          isRequired
          value={email}
          className="w-full"
          aria-label="Enter your email"
          onChange={onChangeEmail}
        />
        <InputComponent
          label="Password"
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
        <p>
          Need to create an account?{" "}
          <Link
            className="cursor-pointer"
            size="sm"
            onPress={() => setSelectedKey("register")}
          >
            Register
          </Link>
        </p>
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
    </EnterMotion>
  );
};

export default LoginComponent;
