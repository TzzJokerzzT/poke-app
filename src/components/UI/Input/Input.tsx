import { Input } from "@heroui/react";
import { InputProps } from "@type/components";

const InputComponent = ({
  className,
  errorMessage,
  isClearable,
  isDisabled,
  isInvalid,
  isRequired,
  label,
  maxLength,
  minLength,
  onChange,
  onClear,
  onValueChange,
  pattern,
  placeholder,
  startContent,
  type,
  value,
  variant,
}: InputProps) => {
  return (
    <Input
      className={className}
      errorMessage={errorMessage}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      label={label}
      maxLength={maxLength}
      minLength={minLength}
      onChange={onChange}
      onClear={onClear}
      onValueChange={onValueChange}
      pattern={pattern}
      placeholder={placeholder}
      startContent={startContent}
      type={type}
      value={value}
      variant={variant}
    />
  );
};

export default InputComponent;
