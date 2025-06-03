export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  isDisabled?: boolean;
  isIconOnly?: boolean;
  isLoading?: boolean;
  onPress?: (e: PressEvent) => void;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg";
  spinner?: React.ReactNode;
  spinnerPlacement?: "start" | "end";
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
}

export interface CardProps {
  className?: string;
  footerContent?: React.ReactNode;
  imageUrl?: string;
  style?: React.CSSProperties;
  title?: string | string[];
}

export interface FormProps {
  children?: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  validationErrors?: Record<string, string | string[]>;
}

export interface InputProps {
  className?: string;
  errorMessage?: ReactNode | ((v: ValidationResult) => ReactNode);
  isClearable?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  label?: string;
  maxLength?: number;
  minLength?: number;
  onClear?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  pattern?: string;
  placeholder: string;
  startContent?: ReactNode;
  type: "text" | "password" | "email" | "search" | "number" | "tel" | "url";
  value: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
}

export interface SpinnerProps {
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "wave" | "dots";
  classNames?: {
    label?: string;
    dots?: string;
  };
}

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

type ValidationResult = {
  isValid?: boolean;
  message?: string;
  [key: string]: string;
};

export interface PokemonInformationProps {
  abilities?: PokemonAbility[];
  base_experience?: number;
  height?: number;
  id: number;
  moves?: PokemonMove[];
  name: string;
  sprites?: PokemonSprite;
  stats?: PokemonStat[];
  types: pokemonTypes[];
  weight?: number;
}

export interface PokemonTabsProps {
  stats?: Array<{
    name: string;
    value: number;
  }>;
  abilities?: Array<{
    ability: {
      name: string;
      url: string;
    };
  }>;
  base_experience?: number;
  moves?: Array<{
    move: {
      name: string;
      url: string;
    };
  }>;
}

export interface PokemonStadisticsProps {
  stats?: Array<{
    name: string;
    value: number;
  }>;
  base_experience?: number;
}

export interface PokemonHeaderProps {
  name: string;
  id: number;
  types?: Array<{ type: { name: string } }>;
}

export interface PokemonImageSectionProps {
  base_experience: number;
  height: number;
  weight: number;
  sprites: PokemonSprite;
  name: string;
  types: string[];
}

export interface TypesBadgesProps {
  types: string[];
}