import { MovieResult } from "@/hooks/UseMovies";
import { Card, CardContent } from "./components/ui/card";
import { useNavigate } from "react-router";

interface Props {
  movieResult: MovieResult;
}

const MovieCard = ({ movieResult }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      className="border-0"
      onClick={() => {
        navigate(`/player/${movieResult.id}`);
      }}
    >
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path ?? ''}`}
            alt={`${movieResult.title ?? movieResult.name} poster`}
            className="hover:opacity-80 transition-all"
          />
          <h1 className="mt-3">
            {movieResult.title ?? movieResult.name}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
