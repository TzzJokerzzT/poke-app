import { Chip } from "@heroui/react";

export interface ChipProps {
  classNames?: Partial<Record<"base" | "content", string>>;
  children?: React.ReactNode;
  startContent?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
}

const ChipComponent = ({
  children,
  classNames,
  radius,
  startContent,
  size,
}: ChipProps) => {
  return (
    <Chip
      classNames={classNames}
      radius={radius}
      startContent={startContent}
      size={size}
    >
      {children}
    </Chip>
  );
};

export default ChipComponent;
