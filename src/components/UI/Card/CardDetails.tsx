import { Card, CardBody, CardHeader } from "@heroui/react";

export interface CardDetailsProps {
  bodyClassName?: string;
  contentClassName?: string;
  classNames?: Partial<Record<"base" | "body", string>>;
  children?: React.ReactNode;
  childrenClassName?: string;
  header?: React.ReactNode;
  headerClassName?: string;
}

/**
 * A reusable card component with customizable header and content sections.
 * Ideal for displaying detailed information (e.g., Pokémon details, user profiles).
 *
 * @component
 * @example
 * // Basic usage with image and children
 * <CardDetails
 *   header={<h2>Title</h2>}
 * >
 *   <p>Custom content here</p>
 * </CardDetails>
 *
 * @example
 * // With custom classes and dimensions
 * <CardDetails
 *   cardClassName="border-2 rounded-lg"
 *   headerClassName="text-xl font-bold"
 * />
 *
 * @param {Object} props - Component props.
 * @param {string} [props.bodyClassName] - CSS classes for the CardBody section.
 * @param {string} [props.contentClassName] - CSS classes for the content container (wraps image and children).
 * @param {string} [props.classNames] - CSS classes for the root Card element.
 * @param {React.ReactNode} [props.children] - Content to display below the image.
 * @param {string} [props.childrenClassName] - CSS classes for the children container.
 * @param {React.ReactNode} [props.header] - Content for the CardHeader (e.g., title, buttons).
 * @param {string} [props.headerClassName] - CSS classes for the CardHeader.
 * @param {string} [props.imgSource] - URL or path for the image.
 * @returns {React.ReactElement} A customizable card component.
 */

const CardDetails = ({
  bodyClassName,
  contentClassName,
  classNames,
  children,
  childrenClassName,
  header,
  headerClassName,
}: CardDetailsProps) => {
  return (
    <Card classNames={classNames}>
      <CardHeader className={headerClassName}>{header}</CardHeader>
      <CardBody className={bodyClassName}>
        <div className={contentClassName}>
          <div className={childrenClassName}>{children}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardDetails;
