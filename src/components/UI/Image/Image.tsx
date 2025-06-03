import { Image } from "@heroui/react";

export interface ImageProps {
  alt?: string;
  className?: string;
  height?: number;
  src?: string;
  width?: number;
}

const ImageComponent = ({ alt, className, height, src, width }: ImageProps) => {
  return (
    <Image
      alt={alt}
      className={className}
      height={height}
      isZoomed
      loading="lazy"
      src={src}
      width={width}
    />
  );
};

export default ImageComponent;
