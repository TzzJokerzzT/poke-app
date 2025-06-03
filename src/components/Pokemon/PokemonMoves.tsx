//External Dependencies
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollShadow } from "@heroui/react";
//Internal Dependencies
import ChipComponent from "@components/UI/Chip/Chip";
import SpinnerComponent from "@components/UI/Spinner/Spinner";
//Types
import { MoveDetails, Moves } from "@type/pokemon";

const PokemonMoves = ({ move }: { move: Moves[] }) => {
  const [moves, setMove] = useState<MoveDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMoves = async () => {
      setIsLoading(true);
      try {
        const details = await Promise.all(
          move.map(async (items: Moves) => {
            const response = await axios.get(items.move.url);
            return response.data;
          }),
        );
        setMove(details);
      } catch (error) {
        console.error("Error in fetchPokemonDetails:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoves();
  }, [move]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[15rem]">
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
    );
  }

  return (
    <ScrollShadow className="w-[50rem] h-[20rem]">
      <div className="space-y-4">
        {moves.map((items: MoveDetails) => (
          <div
            key={items.name}
            className="flex flex-col w-[45rem] p-3 border rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium capitalize">
                  {items.name.replace("-", " ")}
                </span>
              </div>
              <ChipComponent
                classNames={{ base: `bg-${items.type.name}` }}
                radius="md"
                size="sm"
              >
                <p className="text-white text-sm">
                  {items.type.name.charAt(0).toUpperCase() +
                    items.type.name.slice(1)}
                </p>
              </ChipComponent>
            </div>
            <div className="flex gap-4">
              {items.power && (
                <p className="text-sm text-gray-600">Power: {items.power}</p>
              )}
              <p className="text-sm text-gray-600">PP: {items.pp}</p>
              {items.accuracy && (
                <p className="text-sm text-gray-600">
                  Accuracy: {items.accuracy}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollShadow>
  );
};

export default PokemonMoves;
