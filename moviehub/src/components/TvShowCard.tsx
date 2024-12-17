import { useNavigate } from "react-router";
import { Card, CardContent } from "./components/ui/card";
import PropTypes from 'prop-types';

const TvShowCard = ({ tvShowResult }) => {
  const navigate = useNavigate();
  return (
    <Card className="border-0" onClick={() => {
      navigate(`/player1/${tvShowResult.id}`);
    }}>
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`}
            alt={`${tvShowResult.title ? tvShowResult.title : tvShowResult.name} poster`}
            className="hover:opacity-80 transition-all"
          />
          <h1 className="mt-3">
            {tvShowResult.title ? tvShowResult.title : tvShowResult.name}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

TvShowCard.propTypes = {
  tvShowResult: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default TvShowCard;
