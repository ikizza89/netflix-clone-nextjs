import Image from "next/image";
import { Movie } from "../typings";
import { TMDB_IMAGE_URL } from "../utils/requests";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px]">
      <h2>{movie.title}</h2>
      <Image
        layout="fill"
        className="rounded-sm object-cover md:rounded"
        src={`${TMDB_IMAGE_URL}/w500/${movie?.backdrop_path || movie?.poster_path}`}
      />
    </div>
  );
}

export default Thumbnail;