//External Dependencies
import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Internal Dependencies
import SpinnerComponent from "@components/UI/Spinner/Spinner";
import { AppLayout } from "@layouts/AppLayout";
import usePokemonStore from "@store/pokemonStore";
import { formatStats } from "@utils/pokemonUtils";
import { PokemonInformation } from "@components/Pokemon";
import ButtonComponent from "@components/UI/Button/Button";

const InformationPage = () => {
  const { isLoading, pokemonDetails, fetchPokemonDetails } = usePokemonStore();

  const {
    abilities,
    base_experience,
    id,
    moves,
    name,
    sprites,
    stats,
    types,
    height,
    weight,
  } = pokemonDetails;

  const { name: pokemonName } = useParams();

  const navigate = useNavigate();

  const formattedStats = useMemo(() => formatStats(stats), [stats]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchPokemonDetails(pokemonName || "");
    }
    return () => {
      isMounted = false;
    };
  }, [pokemonName, fetchPokemonDetails]);

  useEffect(() => {
    document.title = `${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} | Pokemon App`;
    return () => {
      document.title = 'Pokemon App';
    };
  }, [pokemonName])

  if (isLoading) {
    return (
      <AppLayout className="flex justify-center items-center h-screen">
        <SpinnerComponent color="danger" />
      </AppLayout>
    );
  }

  return (
    <AppLayout className="flex flex-col justify-center items-center h-screen">
      <ButtonComponent onPress={() => navigate("/")}>Go Back</ButtonComponent>
      <PokemonInformation
        abilities={abilities}
        base_experience={base_experience}
        height={height}
        id={id}
        moves={moves}
        name={name}
        sprites={sprites}
        stats={formattedStats}
        types={types}
        weight={weight}
      />
    </AppLayout>
  );
};

export default InformationPage;
