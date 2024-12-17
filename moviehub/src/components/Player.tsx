import { useParams } from "react-router";

const Player = () => {

    const {playerId} = useParams()
    const movieUrl = `https://vidsrc.xyz/embed/movie/${playerId}`;
  return (
    <iframe src={movieUrl} className="w-full h-screen" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

    </iframe>
  )
}

export default Player