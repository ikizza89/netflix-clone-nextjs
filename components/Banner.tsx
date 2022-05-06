import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "../typings";
import { TMDB_IMAGE_URL } from "../utils/requests";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * netflixOriginals.length);
    setMovie(netflixOriginals[index]);
  }, [])


  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          layout="fill"
          objectFit="cover"
          src={`${TMDB_IMAGE_URL}/original/${movie?.backdrop_path || movie?.poster_path}`}
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-2xl md:4xl lg:text-7xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md">{movie?.overview}</p>
        <div className="flex space-x-3 mt-5">
          <button className="bannerButton bg-white text-black"><FaPlay className="" /> Play</button>
          <button className="bannerButton bg-[gray]/70">
            More info
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>

    </div>
  );
}

export default Banner;