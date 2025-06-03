import { HeaderComponent } from "@components/Header/Header";
import { FooterComponent } from "@components/Footer";

export interface AppLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const AppLayout = ({ children, className }: AppLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className={className}>{children}</main>
      <FooterComponent />
    </div>
  );
};
