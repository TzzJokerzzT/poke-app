export interface LoginLayoutProps {
  children: React.ReactNode;
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
  return <div className="flex justify-center items-center h-screen">{children}</div>;
};
