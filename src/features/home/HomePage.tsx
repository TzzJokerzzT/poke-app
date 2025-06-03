//External Dependencies
import { Suspense, useEffect, useState } from "react";
//Internal Dependencies
import { Motion } from "@components/UI/Motion/Index";
import SpinnerComponent from "@components/UI/Spinner/Spinner";
import { AppLayout } from "@layouts/AppLayout";
import usePokemonStore from "@store/pokemonStore";
//Types
import { PokemonCard } from "@components/Pokemon";
import { pokemonDetails } from "@type/pokemon";
import useAuthStore from "@store/authStore";
//Lazy loading

const Home = () => {
  const [offset, setOffset] = useState(0);
  const { pokemons, isLoading, fetchPokemon } = usePokemonStore();
  const { iniAuth, user } = useAuthStore();

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted) {
      fetchPokemon(30, offset);
    }
    return () => {
      isComponentMounted = false;
    };
  }, [offset, fetchPokemon]);

  useEffect(() => {
    document.title = `Home | Pokemon App`;
    return () => {
      document.title = "Pokemon App";
    };
  }, []);

  useEffect(() => {
    iniAuth();
    console.log(user)
  }, [iniAuth, user])

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
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
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
          </div>
        }
      >
        <section className="flex flex-wrap justify-center items-center gap-2">
          {pokemons.map((pokemon: pokemonDetails) => (
            <Motion key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Motion>
          ))}
        </section>
      </Suspense>
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setOffset((prev) => Math.max(0, prev - 30))}
          disabled={offset === 0}
          className={`px-4 py-2 rounded-lg ${
            offset === 0 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white transition-colors`}
        >
          Previous
        </button>
        <button
          onClick={() => setOffset((prev) => prev + 30)}
          className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
        >
          Next
        </button>
      </div>
    </AppLayout>
  );
};

export default Home;
