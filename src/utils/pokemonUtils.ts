interface formatStats {
  stat: { name: string };
  base_stat: number;
}

interface FormattedStats {
  name: string;
  value: number;
}

interface Capitalizable {
  name: string;
}

interface CapitalizableType {
  type: {
    name: string;
  };
}

export const formatStats = (stats: formatStats[]): FormattedStats[] => {
  return stats?.map((stat) => ({
    name: stat?.stat?.name || "Unknown",
    value: stat?.base_stat || 0,
  }));
};

export const capitalizeFirstLetter = (
  input: string | Capitalizable[] | CapitalizableType[] | undefined,
): string | string[] => {
  if (typeof input === "string") {
    return input.charAt(0).toUpperCase() + input.slice(1);
  } else if (Array.isArray(input)) {
    return input.map((item) => {
      const name = "name" in item ? item.name : item.type.name;
      return name.charAt(0).toUpperCase() + name.slice(1);
    });
  }
  return input;
};

export const formatId = (id: number | string) => {
  return id?.toString().padStart(3, "0");
};
