import CardDetails from "@components/UI/Card/CardDetails";
import PokemonHeader from "./PokemonHeader";
import CardComponent from "@components/UI/Card/Card";
import { Footprints, Scale } from "@utils/icons";
import { typeBackground } from "@utils/pokemonTypeBackground";
import { useMemo } from "react";
import PokemonTabs from "./PokemonTabs";
import { PokemonInformationProps } from "@type/components";
import { Motion } from "@components/UI/Motion/Motion";

const PokemonInformation = ({
  abilities,
  base_experience,
  height,
  id,
  sprites,
  stats,
  types,
  moves,
  name,
  weight,
}: PokemonInformationProps) => {
  const backgroundImage = useMemo(() => {
    return typeBackground[types[0]?.type.name];
  }, [types]);

  return (
    <Motion>
      <CardDetails
        classNames={{ base: "w-[70rem]", body: "min-h-[26rem]" }}
        headerClassName="bg-red-500 text-white font-fold"
        header={<PokemonHeader name={name} id={id} types={types} />}
        childrenClassName="grid grid-cols-1 grid-rows-1 md:grid-cols-[17rem_1fr] grid-rows-[20rem] gap-0"
      >
        <div className="justify-self-center self-center">
          <CardComponent
            className={`flex justify-center items-center w-60 h-64 border-3 border-${types[0].type.name.toLowerCase()} rounded-lg text-white`}
            imageUrl={sprites?.front_default}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
            }}
            footerContent={
              <div className="flex items-center">
                <div className="flex items-center mx-1">
                  <Scale className="w-4 h-4 mr-1" />
                  <p className="text-white">Weight: {weight}</p>
                </div>
                <div className="flex items-center mx-1">
                  <Footprints className="w-4 h-4 mr-1" />
                  <p className="text-white">Height: {height}</p>
                </div>
              </div>
            }
          />
        </div>
        <div className="items-center">
          <PokemonTabs
            stats={stats}
            abilities={abilities}
            base_experience={base_experience}
            moves={moves}
          />
        </div>
      </CardDetails>
    </Motion>
  );
};

export default PokemonInformation;
