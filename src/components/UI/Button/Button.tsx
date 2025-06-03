import { Button } from "@heroui/react";
import { ButtonProps } from "@type/components";

const ButtonComponent = ({
  children,
  className,
  color,
  isDisabled,
  isIconOnly,
  isLoading,
  onPress,
  radius,
  spinner,
  spinnerPlacement,
  size,
  variant,
}: ButtonProps) => {
  return (
    <Button
      className={className}
      color={color}
      isDisabled={isDisabled}
      isIconOnly={isIconOnly}
      isLoading={isLoading}
      onPress={onPress}
      radius={radius}
      spinner={spinner}
      spinnerPlacement={spinnerPlacement}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
