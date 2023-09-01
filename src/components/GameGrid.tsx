import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
interface Props {
  selectedGenre: Genre | null;
  selectedPlaform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlaform }: Props) => {
  const { data, error, loading } = useGames(selectedGenre, selectedPlaform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {/* {loading && <Spinner />} */}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
