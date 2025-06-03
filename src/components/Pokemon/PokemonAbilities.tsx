//External Dependencies
import axios from "axios";
import { Sparkle } from "@utils/icons";
import { useEffect, useState } from "react";
//Types
import { Ability, AbilityDetails } from "@type/pokemon";

const PokemonAbilities = ({ abilities }: { abilities: Ability[] }) => {
  const [abilitiesDetails, setAbilitiesDetails] = useState<AbilityDetails[]>(
    [],
  );

  useEffect(() => {
    const fetchAbilityDetails = async () => {
      const details = await Promise.all(
        abilities.map(async (ability: Ability) => {
          const response = await axios.get(ability.ability.url);
          return response.data;
        }),
      );
      setAbilitiesDetails(details);
    };

    fetchAbilityDetails();
  }, [abilities]);

  return (
    <div className="space-y-4">
      {abilitiesDetails.map((ability: AbilityDetails) => (
        <div
          key={ability.name}
          className="flex flex-col w-[45rem] border rounded-lg p-3"
        >
          <div className="flex items-center">
            <Sparkle className="w-4 h-4 mr-2" />
            <span className="font-medium">
              {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
            </span>
          </div>
          <div>
            <p className="text-gray-600">{ability.effect_entries[1].effect}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonAbilities;
