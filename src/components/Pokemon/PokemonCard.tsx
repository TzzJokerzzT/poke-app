//External Dependencies
import { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@heroui/react";
//Internal Dependencies
import CardComponent from "@components/UI/Card/Card";
import TypesBadges from "./PokemonTypesBadges";
import ButtonComponent from "@components/UI/Button/Button";
import usePokemonStore from "@store/pokemonStore";
import { capitalizeFirstLetter } from "@utils/pokemonUtils";
import { typeBackground } from "@utils/pokemonTypeBackground";
import { Star, StarOff } from "@utils/icons";
//Types
import { pokemonDetails } from "@type/pokemon";

interface PokemonCardProps {
  pokemon: pokemonDetails;
}

const PokemonCard = memo(({ pokemon }: PokemonCardProps) => {
  const { setPokemonFavorites } = usePokemonStore();
  const [favorite, setIsFavorite] = useState(false);

  const types = pokemon?.types?.map((element) =>
    capitalizeFirstLetter(element?.type?.name)
  ) as string[];

  const handleClick = ({pokemon}: {pokemon: pokemonDetails}) => {
    setPokemonFavorites(pokemon);
    setIsFavorite(!favorite);
  };

  return (
    <Badge
      placement="top-right"
      size="lg"
      content={
        <button
          onClick={() => handleClick({pokemon})}
          className="cursor-pointer hover:scale-110 transition-transform"
        >
          {favorite ? (
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ) : (
            <StarOff className="w-6 h-6" />
          )}
        </button>
      }
      variant="shadow"
      aria-label={`Add ${pokemon.name} to favorites`}
    >
      <CardComponent
        imageUrl={pokemon.sprites?.front_default}
        footerContent={
          <div className="flex flex-row items-center justify-center gap-4">
            <TypesBadges types={types} />
            <ButtonComponent
              className={`${
                pokemon.types?.[0]?.type?.name
                  ? `bg-${pokemon.types[0].type.name}`
                  : ""
              } font-bold text-white hover:text-black`}
            >
              <Link to={`/pokemon/${pokemon.name}`}>More Info</Link>
            </ButtonComponent>
          </div>
        }
        className={`h-64 border-3 border-${types[0].toLowerCase()} rounded-lg`}
        style={{
          background: `url(${typeBackground[types[0].toLowerCase()]})`,
          backgroundSize: "cover",
        }}
      />
    </Badge>
  );
});

export default PokemonCard;
