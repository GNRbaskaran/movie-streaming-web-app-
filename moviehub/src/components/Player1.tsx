import { useParams } from "react-router";

const Player1 = () => {

    const {playerId} = useParams()
    const tvUrl = `https://vidsrc.xyz/embed/tv/${playerId}`;
  return (
    <iframe src={tvUrl} className="w-full h-screen" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

    </iframe>
  )
}

export default Player1;