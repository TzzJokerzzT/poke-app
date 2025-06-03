import { EnterMotion } from "@components/UI/Motion/Motion";
import FormComponent from "@components/UI/Form/Form";
import InputComponent from "@components/UI/Input/Input";
import ButtonComponent from "@components/UI/Button/Button";
import { Link } from "@heroui/react";
import useAuthStore from "@store/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerComponent from "@components/UI/Spinner/Spinner";

const RegisterComponent = ({
  setSelectedKey,
}: {
  setSelectedKey: (key: string) => void;
}) => {
  const { isLoading, register } = useAuthStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(email, password);
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
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
        onSubmit={handleRegister}
        className="flex flex-col items-center gap-4 h-[20rem]"
      >
        <InputComponent
          label="Username"
          maxLength={20}
          minLength={3}
          type="text"
          placeholder="Enter your username"
          isRequired
          value={username}
          className="w-full"
          aria-label="Enter your username"
          onChange={onChangeUsername}
        />
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
          type="password"
          placeholder="Enter your password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          onClear={() => console.log("Clear")}
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
            onPress={() => setSelectedKey("login")}
          >
            Login
          </Link>
        </p>
        <ButtonComponent
          className="w-full"
          onPress={handleRegister}
          isLoading={isLoading}
          spinner={<SpinnerComponent size="sm" color="danger" />}
          spinnerPlacement="start"
        >
          {isLoading ? "" : "Register"}
        </ButtonComponent>
      </FormComponent>
    </EnterMotion>
  );
};

export default RegisterComponent;
