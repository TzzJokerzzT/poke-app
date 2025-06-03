//External Dependencies
import { useMemo } from "react";
import { Image } from "@heroui/react";
//Internal Dependencies
import usePokemonStore from "@store/pokemonStore";
import { Scale, Footprints, Component } from "@utils/icons";
import { PokemonImageSectionProps } from "@type/components";

const PokemonImageSection = ({
  base_experience,
  height,
  weight,
  sprites,
  name,
  types,
}: PokemonImageSectionProps) => {
  const { getBackgroundByType } = usePokemonStore();

  const backgroundImage = useMemo(() => {
    return getBackgroundByType(types[0].toLowerCase());
  }, [types, getBackgroundByType]);

  return (
    <div
      className={`flex flex-col justify-center items-center w-60 h-80 border-2 border-${types[0].toLowerCase()} rounded-lg bg-contain`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center w-48 h-48 mb-4">
        <Image
          isZoomed
          src={sprites?.front_default}
          alt={name}
          width={200}
          height={200}
        />
        <div className="flex justify-center gap-3 w-[13rem] mt-2 py-2 border rounded-xl text-sm text-white backdrop-blur-lg">
          <div className="flex items-center">
            <Scale className="w-4 h-4 mr-1" />
            <span>{(weight / 10).toFixed(1)} kg</span>
          </div>
          <div className="flex items-center">
            <Footprints className="w-4 h-4 mr-1" />
            <span>{(height / 10).toFixed(1)} kg</span>
          </div>
          <div className="flex items-center">
            <Component className="w-4 h-4 mr-1" />
            <span>{base_experience}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonImageSection;
