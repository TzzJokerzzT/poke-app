import { Card, CardFooter, CardHeader, Image } from "@heroui/react";
import { CardProps } from "@type/components";

const CardComponent = ({
  className,
  footerContent,
  imageUrl,
  style,
  title,
}: CardProps) => {
  return (
    <Card isFooterBlurred className={className} style={style}>
      <CardHeader className="flex-col items-start absolute top-1 z-10">
        <h4 className="text-white">{title}</h4>
      </CardHeader>
      <Image
        isZoomed
        loading="lazy"
        alt={`Picture of ${title}`}
        className="w-full object-cover"
        height={200}
        src={imageUrl}
        width={200}
      />
      <CardFooter className="flex flex-col items-start absolute bottom-0 z-10 dark:border-default-100">
        {footerContent}
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
