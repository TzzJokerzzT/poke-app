export interface apiResponse {
  count?: number;
  next?: string | undefined;
  previous?: string | undefined;
  results?: pokemonResults[];
}

export interface pokemonResults {
  name: string;
  url: string;
}

export interface pokemonDetails {
  abilities?: pokemonAbilities[];
  base_experience?: number;
  games_indices?: { game_index: number; version: { name: string } }[];
  height?: number;
  id?: number;
  moves?: pokemonMoves[];
  name?: string;
  order?: number;
  sprites?: pokemonSprites;
  types?: pokemonTypes[];
  weight?: number;
}

interface pokemonAbilities {
  ability: { name: string; url: string };
}

interface pokemonMoves {
  move: { name: string; url: string };
}

export interface pokemonTypes {
  slot?: number;
  type?: { name: string };
}

interface pokemonSprites {
  back_default?: string | undefined;
  back_female?: string | undefined;
  back_shiny?: string | undefined;
  back_shiny_female?: string | undefined;
  front_default?: string | undefined;
  front_female?: string | undefined;
  front_shiny?: string | undefined;
  front_shiny_female?: string | undefined;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface AbilityDetails {
  name: string;
  effect_entries: {
    effect: string;
    language: {
      name: string;
    };
  }[];
}

export interface Moves {
  move: {
    name: string;
    url: string;
  };
}

export interface MoveDetails {
  accuracy: number | null;
  name: string;
  power: number | null;
  pp: number;
  type: {
    name: string;
  };
}
