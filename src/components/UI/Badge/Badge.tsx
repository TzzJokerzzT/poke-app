import { Badge } from "@heroui/react";

export interface BadgeProps {
  children?: React.ReactNode;
  classNames?: Partial<Record<"base" | "badge", string>>;
  placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  content?: string | number | React.ReactNode;
}

const BadgeComponent = ({ children, classNames, placement }: BadgeProps) => {
  return (
    <Badge
      classNames={classNames}
      placement={placement}
      shape="circle"
      size="lg"
      variant="solid"
    >
      {children}
    </Badge>
  );
};

export default BadgeComponent;
