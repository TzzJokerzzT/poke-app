//External Dependencies
import { lazy, Suspense } from "react";
import { Tab, Tabs } from "@heroui/react";
//Internal Dependencies
import PokemonAbilities from "./PokemonAbilities";
import PokemonStadistics from "./PokemonStadistics";
import LabelComponent from "@components/UI/Label/Label";
import SpinnerComponent from "@components/UI/Spinner/Spinner";
import { ChartBar, Fan, Move } from "@utils/icons";
//Lazy Loading
const PokemonMoves = lazy(() => import("./PokemonMoves"));

import { PokemonTabsProps } from "@type/components";
import { EnterMotion } from "@components/UI/Motion/Motion";

const PokemonTabs = ({
  abilities,
  base_experience,
  moves,
  stats,
}: PokemonTabsProps) => {
  const tabs = [
    {
      id: "base_stats",
      label: (
        <LabelComponent className="flex items-center space-x-2">
          <ChartBar />
          <span>Base Stats</span>
        </LabelComponent>
      ),
      content: (
        <EnterMotion>
          <PokemonStadistics
            stats={stats || []}
            base_experience={base_experience}
          />
        </EnterMotion>
      ),
    },
    {
      id: "abilities",
      label: (
        <LabelComponent className="flex items-center space-x-2">
          <Fan />
          <span>Abilities</span>
        </LabelComponent>
      ),
      content: (
        <EnterMotion>
          <PokemonAbilities abilities={abilities || []} />
        </EnterMotion>
      ),
    },
    {
      id: "moves",
      label: (
        <LabelComponent className="flex items-center space-x-2">
          <Move />
          <span>Moves</span>
        </LabelComponent>
      ),
      content: (
        <Suspense
          fallback={
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
          }
        >
          <EnterMotion>
            <PokemonMoves move={moves || []} />
          </EnterMotion>
        </Suspense>
      ),
    },
  ];

  return (
    <Tabs items={tabs} aria-label="Options">
      {(items) => (
        <Tab key={items.id} title={items.label}>
          {items.content}
        </Tab>
      )}
    </Tabs>
  );
};

export default PokemonTabs;
