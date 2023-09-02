import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <GameCardContainer>
        <Card>
          <Image
            src={getCroppedImageUrl(game.background_image)}
            alt="card image"
          />
          <CardBody>
            <HStack justifyContent={"space-between"} marginBottom={3}>
              <PlatformIconsList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize={"2xl"}>
              {game.name} <Emoji rating={game.rating_top} />
            </Heading>
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
