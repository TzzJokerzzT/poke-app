import ChipComponent from "@components/UI/Chip/Chip";
import { TypesBadgesProps } from "@type/components";

const TypesBadges = ({ types }: TypesBadgesProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {types?.map((type: string) => (
        <ChipComponent
          key={type}
          classNames={{ base: `bg-${type.toLowerCase()}` }}
          radius="md"
          size="sm"
        >
          <p className="text-white text-sm font-bold">{type}</p>
        </ChipComponent>
      ))}
    </div>
  );
};

export default TypesBadges;
