import {
  apiResponse,
  Moves,
  pokemonDetails,
  pokemonResults,
} from "@type/pokemon";
import { baseUrl } from "@utils/baseUrl";
import axios from "axios";

export const fetchPokemonList = async (
  limit: number,
  offset: number,
  signal?: AbortSignal
) => {
  try {
    const response = await axios.get<apiResponse>(
      `${baseUrl}/pokemon?limit=${limit}&offset=${offset}`,
      { signal }
    );

    const results = response.data.results;
    if (!Array.isArray(results)) {
      throw new Error("The response is not contain a valid Pokemon list");
    }

    const data = await Promise.all(
      results.map(async (pokemon: pokemonResults) => {
        const response = await axios.get(pokemon.url, { signal });
        return response.data;
      })
    );

    return data;
  } catch (error) {
    console.error("Error in fetchPkmApi:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (name?: string) => {
  try {
    const response = await axios.get<pokemonDetails>(
      `${baseUrl}/pokemon/${name}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in fetchPokemonDetails:", error);
    throw error;
  }
};

export const fetchPokemonMove = async (moveArr: Moves[]) => {
  try {
    const response = await Promise.all(
      moveArr.map(async (items: Moves) => {
        const response = await axios.get(items.move.url);
        return response.data;
      })
    );
    return response;
  } catch (error) {
    console.error("Error in fetchPokemonDetails:", error);
    throw error;
  }
};

export const fetchPokemonFavorite = async (arr: pokemonDetails[]) => {
  try {
    const details = Promise.all(
      arr.map(async (items: pokemonDetails) => {
        const response = await axios.get(`${baseUrl}/pokemon/${items.name}`);
        return response.data;
      })
    );
    return details
  } catch (error) {
    console.error("Error in fetchPokemonDetails:", error);
    throw error;
  }
};
