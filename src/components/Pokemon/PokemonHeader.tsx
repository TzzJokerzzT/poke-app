//External Dependencies
import { useMemo } from "react";
//Internal Dependencies
import ChipComponent from "@components/UI/Chip/Chip";
import { formatId } from "@utils/pokemonUtils";
import { PokemonHeaderProps } from "@type/components";

const PokemonHeader = ({ name, id, types }: PokemonHeaderProps) => {
  const formattedId = useMemo(() => formatId(id), [id]);

  const formattedType = useMemo(() => {
    return (type: string) => type.toLowerCase();
  }, []);

  const capitalizeType = useMemo(() => {
    return (type: string) => type.charAt(0).toUpperCase() + type.slice(1);
  }, []);

  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <h2 className="text-white text-2xl md:text-3xl capitalize">{name}</h2>
        <span className="text-white">#{formattedId}</span>
      </div>
      <div className="flex gap-2">
        {types?.map((type) => (
          <ChipComponent
            key={type.type.name}
            classNames={{ base: `bg-${formattedType(type.type.name)}` }}
            radius="md"
            size="sm"
          >
            <p className="text-white text-lg">
              {capitalizeType(type.type.name)}
            </p>
          </ChipComponent>
        ))}
      </div>
    </div>
  );
};

export default PokemonHeader;
