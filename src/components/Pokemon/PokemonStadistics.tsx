import { Progress, ScrollShadow } from "@heroui/react";
import { PokemonStadisticsProps } from "@type/components";
import { Heart, Swords, Shield, Zap, Activity } from "@utils/icons";

const PokemonStadistics = ({
  stats,
  base_experience,
}: PokemonStadisticsProps) => {
  const getStatIcon = (statName: string) => {
    switch (statName) {
      case "hp":
        return <Heart className="w-4 h-4 mr-2" />;
      case "attack":
        return <Swords className="w-4 h-4 mr-2" />;
      case "defense":
        return <Shield className="w-4 h-4 mr-2" />;
      case "special-attack":
        return <Zap className="w-4 h-4 mr-2" />;
      case "special-defense":
        return <Shield className="w-4 h-4 mr-2" />;
      case "speed":
        return <Activity className="w-4 h-4 mr-2" />;
      default:
        return <Activity className="w-4 h-4 mr-2" />;
    }
  };

  const formatStatName = (statName: string) => {
    return statName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <ScrollShadow hideScrollBar className="w-[50rem] h-[20rem]">
      <div className="space-y-4">
        <div className="flex items-center">
          {getStatIcon("base_experience")}
          <p className="text-sm font-medium">Base Experience</p>
        </div>
        <Progress
          aria-label="Progress"
          value={base_experience}
          classNames={{
            indicator: "bg-gradient-to-r from-blue-500 to-purple-500",
          }}
        />
        {stats?.map((stat) => (
          <div key={stat.name} className="space-y-1">
            <div className="flex items-center">
              {getStatIcon(stat.name)}
              <span className="text-sm font-medium">
                {formatStatName(stat.name)}
              </span>
              <span className="ml-auto text-sm font-bold">{stat.value}</span>
            </div>
            <Progress
              aria-label="Progress"
              value={stat.value}
              classNames={{
                indicator: "bg-gradient-to-r from-blue-500 to-purple-500",
              }}
            />
          </div>
        ))}
      </div>
    </ScrollShadow>
  );
};

export default PokemonStadistics;
