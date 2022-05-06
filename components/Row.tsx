import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleArrowClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left" ?
          scrollLeft - clientWidth :
          scrollLeft + clientWidth;

      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });

      if (rowRef.current.scrollLeft <= clientWidth && direction === "left") {
        setIsMoved(false);
      } else {
        setIsMoved(true);
      }
    }


  }

  return (
    <div className="space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
      <div className="relative group md:-ml-2">
        <ChevronLeftIcon
          onClick={() => handleArrowClick("left")}
          className={`rowChevron left-0 ${!isMoved && "hidden"}
          `} />

        <div
          ref={rowRef}
          className="
        flex items-center space-x-1 overflow-x-scroll 
        scrollbar-hide md:p-2 md:space-x-1.5">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          onClick={() => handleArrowClick("right")}
          className={`rowChevron right-2`} />
      </div>
    </div>
  );
}

export default Row;