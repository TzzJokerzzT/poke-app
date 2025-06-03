import { Spinner } from "@heroui/react";
import { SpinnerProps } from "@type/components";

const SpinnerComponent = ({ color, label, size, variant, classNames }: SpinnerProps) => {
  return (
    <Spinner
      color={color}
      classNames={classNames}
      label={label}
      size={size}
      variant={variant}
    />
  );
};

export default SpinnerComponent;
