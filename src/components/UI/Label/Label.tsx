export interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

const LabelComponent = ({ children, className }: LabelProps) => {
  return <div className={className}>{children}</div>;
};

export default LabelComponent;
