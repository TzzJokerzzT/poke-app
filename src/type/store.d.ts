export interface IPokemonStore {
  pokemons: pokemonDetails[];
  pokemonList: pokemonDetails[];
  pokemonDetails: pokemonDetails;
  pokemonMoves: Moves[];
  pokemonFavorites: pokemonDetails[];
  pokemonFavoritesList: pokemonDetails[];
  isFavorite: Record<string, boolean>;
  isLoading: boolean;
  error: string | null;
  checkPokemonIsFavorite: (id: number | undefined) => void;
  getColorByType: (type: string) => string;
  getBackgroundByType: (type: string) => string;
  setPokemonFavorites: (pokemon: pokemonDetails) => void;
  fetchPokemon: (limit: number, offset: number) => Promise<void>;
  fetchPokemonList: () => Promise<void>;
  fetchPokemonDetails: (name?: string) => Promise<void>;
  fetchPokemonFavorite: (name?: string) => Promise<void>;
  fetchPokemonMoves: (moveArr: Moves[]) => Promise<void>;
}
