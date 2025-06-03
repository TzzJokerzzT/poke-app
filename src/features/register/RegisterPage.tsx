import LoginComponent from "@components/Login/Login";
import RegisterComponent from "@components/Register/Register";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import { LoginLayout } from "@layouts/LoginLayout";
import { useEffect, useState } from "react";
import useAuthStore from "@store/authStore";

const Register = () => {
  const [selectedKey, setSelectedKey] = useState<string>("login");
  const { iniAuth, user } = useAuthStore();

  useEffect(() => {
    iniAuth();
    console.log(user);
  }, [iniAuth, user]);

  return (
    <LoginLayout>
      <Card className="max-w-full w-[25rem] h-[25rem]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            aria-label="Tabs form"
            selectedKey={selectedKey}
            size="md"
            onSelectionChange={(key) => setSelectedKey(key as string)}
          >
            <Tab key="login" title="Login">
              <LoginComponent setSelectedKey={setSelectedKey} />
            </Tab>
            <Tab key="register" title="Register">
              <RegisterComponent setSelectedKey={setSelectedKey} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </LoginLayout>
  );
};

export default Register;
