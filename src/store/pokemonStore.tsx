import {
  fetchPokemonList,
  fetchPokemonMove,
  fetchPokemonDetails,
} from "@services/fetchPokemon";
import { Moves, pokemonDetails, pokemonResults } from "@type/pokemon";
import { IPokemonStore } from "@type/store";
import { typeBackground } from "@utils/pokemonTypeBackground";
import { typeColors } from "@utils/pokemonTypeColors";
import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const usePokemonStore = create<IPokemonStore>()(
  persist(
    (set, get) => ({
      pokemons: [],
      pokemonList: [],
      pokemonDetails: {},
      pokemonMoves: [],
      pokemonFavorites: [],
      pokemonFavoritesList: [],
      isFavorite: {},
      isLoading: false,
      error: null,

      getColorByType: (type: string) => {
        const primaryType = type.toLowerCase();
        return typeColors[primaryType] || "#000000";
      },

      getBackgroundByType: (type: string) => {
        const primaryType = type.toLowerCase();
        return typeBackground[primaryType] || "#000000";
      },

      checkPokemonIsFavorite: (id?: number): boolean => {
        if (!id) return false;
        const currentFavorites = get().pokemonFavorites;
        return currentFavorites.some((favorite) => favorite.id === id);
      },

      setPokemonFavorites: (pokemon: pokemonDetails) => {
        if (!pokemon.id) return;
        
        const currentFavorites = get().pokemonFavorites;
        const isFavorite = currentFavorites.some(
          (favorite: pokemonDetails) => favorite.id === pokemon.id
        );

        if (isFavorite) {
          const updatedFavorites = currentFavorites.filter(
            (favorite: pokemonDetails) => favorite.id !== pokemon.id
          );
          set({
            pokemonFavorites: updatedFavorites,
            isFavorite: { ...get().isFavorite, [pokemon.id.toString()]: false },
          });
        } else {
          set({
            pokemonFavorites: [
              ...currentFavorites,
              { id: pokemon.id, name: pokemon.name },
            ],
            isFavorite: { ...get().isFavorite, [pokemon.id.toString()]: true },
          });
        }
      },

      fetchPokemon: async (limit: number, offset: number): Promise<void> => {
        try {
          set({ isLoading: true, error: null });
          const data = await fetchPokemonList(limit, offset);
          set({ pokemons: data });
        } catch (error) {
          set({ error: "Failed to fetch Pokemon list" });
          console.error("Error in fetchPokemon:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      fetchPokemonList: async () => {
        try {
          set({ isLoading: true, error: null });
          const response = await Promise.all(
            get().pokemons.map((pokemon: pokemonResults) =>
              axios.get<pokemonDetails>(pokemon.url)
            )
          );
          const data = response.map((res) => res.data);
          set({ pokemonList: data });
        } catch (error) {
          set({ error: "Failed to fetch Pokémon details" });
          console.error("Error in fetchPokemonDetails:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      fetchPokemonDetails: async (name?: string) => {
        try {
          set({ isLoading: true, error: null });
          const response = await fetchPokemonDetails(name);
          const data = response;
          set({ pokemonDetails: data });
        } catch (error) {
          set({ error: "Failed to fetch Pokémon details" });
          console.error("Error in fetchPokemonDetails:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      fetchPokemonFavorite: async (name?: string) => {
        try {
          set({ isLoading: true, error: null });
          const response = await fetchPokemonDetails(name);
          const data = response;
          set((state) => {
            const isDuplicate = state.pokemonFavoritesList.some(
              (pokemon) => pokemon.id === data.id
            );
            if (!isDuplicate) {
              return {
                pokemonFavoritesList: [...state.pokemonFavoritesList, data],
              };
            }
            return state;
          });
        } catch (error) {
          set({ error: "Failed to fetch Pokémon details" });
          console.error("Error in fetchPokemonDetails:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      fetchPokemonMoves: async (moveArr: Moves[]) => {
        try {
          set({ isLoading: true, error: null });
          const data = await fetchPokemonMove(moveArr);
          set({ pokemonMoves: data });
        } catch (error) {
          set({ error: "Failed to fetch Pokémon details" });
          console.error("Error in fetchPokemonDetails:", error);
        }
      },
    }),
    {
      name: "pokemon-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        pokemons: state.pokemons.map((items: pokemonDetails) => ({
          id: items.id,
          name: items.name,
          sprites: items.sprites,
          types: items.types,
        })),
        pokemonDetails: state.pokemonDetails,
        pokemonFavoritesList: state.pokemonFavoritesList,
      }),
      onRehydrateStorage: (state) => {
        return console.log("Storage rehydrated:", state);
      },
    }
  )
);

export default usePokemonStore;
