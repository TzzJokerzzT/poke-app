import { Form } from "@heroui/react";
import { FormProps } from "@type/components";

const FormComponent = ({
  children,
  className,
  onSubmit,
  validationErrors,
}: FormProps) => {
  return (
    <Form
      className={className}
      onSubmit={onSubmit}
      validationErrors={validationErrors}
    >
      {children}
    </Form>
  );
};

export default FormComponent;
