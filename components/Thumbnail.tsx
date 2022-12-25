import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  result: any;
  movie?: boolean;
};

const Thumbnail: React.FC<Props> = ({ result, movie }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();
  const navigate = () => {
    router.push(movie ? `/movie/${result.id}` : `/show/${result.id}`);
  };
  return (
    <div
      onClick={navigate}
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px]
    rounded-lg overflow-hidden shadow-xl cursor-pointer border-3px border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
    >
      <Image
        src={`${BASE_URL}${result.backdroup_path || result.poster_path}`}
        width={330}
        height={210}
        objectFit="cover"
        objectPosition="top"
        className="rounded-lg"
      />
    </div>
  );
};

export default Thumbnail;
