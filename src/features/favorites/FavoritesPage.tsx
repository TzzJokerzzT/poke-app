// External Dependencies
import { useEffect, useState } from "react";
import { Motion } from "@components/UI/Motion/Index";
// Internal Dependencies
import { AppLayout } from "@layouts/AppLayout";
import { PokemonCard } from "@components/Pokemon";
import SpinnerComponent from "@components/UI/Spinner/Spinner";
import usePokemonStore from "@store/pokemonStore";
//Types
import { pokemonDetails } from "@type/pokemon";

const FavoritesPage = () => {
  const { pokemonFavorites } = usePokemonStore();
  const [favoritePokemonDetails, setFavoritePokemonDetails] = useState<
    pokemonDetails[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavoriteDetails = async () => {
      try {
        const details = await Promise.all(
          pokemonFavorites.map(async (favorite) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${favorite.id}`
            );
            return response.json();
          })
        );
        setFavoritePokemonDetails(details);
      } catch (error) {
        console.error("Error fetching favorite pokemon details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavoriteDetails();
  }, [pokemonFavorites]);

  useEffect(() => {
    document.title = `Favorites | Pokemon App`;
    return () => {
      document.title = "Pokemon App";
    };
  }, []);

  if (isLoading) {
    return (
      <AppLayout className="flex justify-center items-center h-screen">
        <SpinnerComponent
          color="danger"
          label="Loading..."
          size="lg"
          variant="wave"
          classNames={{
            label: "mt-4 text-foreground",
            dots: "",
          }}
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout className="flex flex-col justify-center items-center gap-4 mt-2 mb-2">
      <Motion>
        <h1 className="text-4xl font-bold mb-8 text-center">
          My Favorite Pokemon
        </h1>
        {favoritePokemonDetails.length === 0 ? (
          <p className="text-center text-xl">No favorite Pokemon yet!</p>
        ) : (
          <section className="flex flex-wrap justify-center items-center gap-2">
            {favoritePokemonDetails.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </section>
        )}
      </Motion>
    </AppLayout>
  );
};

export default FavoritesPage;
