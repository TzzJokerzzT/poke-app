import { Image, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";

interface NavbarProps {
  imageURL: string;
  alt: string;
  children: React.ReactNode;
  width: number;
  height: number;
}

const NavbarComponent = ({
  imageURL,
  alt,
  children,
  width,
  height,
}: NavbarProps) => {
  return (
    <Navbar className="z-50 h-24">
      <NavbarBrand>
        <Image
          loading="lazy"
          src={imageURL}
          alt={alt}
          width={width}
          height={height}
        />
      </NavbarBrand>
      <NavbarContent justify="center">{children}</NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
