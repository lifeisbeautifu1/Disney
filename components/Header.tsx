import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { Session } from 'next-auth';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  HomeIcon,
  SearchIcon,
  StarIcon,
  PlusIcon,
} from '@heroicons/react/solid';

const Header: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="sticky top-0 bg-[#040714] z-[100] flex items-center px-10 md:px-12 h-20">
      <Image
        src="/images/logo.svg"
        onClick={() => router.push('/')}
        width={80}
        height={80}
        className="cursor-pointer"
      />
      {session && (
        <div className="ml-10 hidden md:flex items-center space-x-6">
          <Link href="/">
            <a className="header-link group">
              <HomeIcon className="h-4" />
              <span className="span">Home</span>
            </a>
          </Link>
          <Link href="/">
            <a className="header-link group">
              <SearchIcon className="h-4" />
              <span className="span">Search</span>
            </a>
          </Link>
          <Link href="/">
            <a className="header-link group">
              <PlusIcon className="h-4" />
              <span className="span">Watchlist</span>
            </a>
          </Link>
          <Link href="/">
            <a className="header-link group">
              <StarIcon className="h-4" />
              <span className="span">Originals</span>
            </a>
          </Link>
          <Link href="/">
            <a className="header-link group">
              <img src="/images/movie-icon.svg" className="h-5" alt="movies" />
              <span className="span">Movies</span>
            </a>
          </Link>
          <Link href="/">
            <a className="header-link group">
              <img src="/images/series-icon.svg" className="h-5" alt="series" />
              <span className="span">Series</span>
            </a>
          </Link>
        </div>
      )}
      {!session ? (
        <button
          onClick={() => signIn()}
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
        >
          Login
        </button>
      ) : (
        <img
          onClick={() => signOut()}
          src={session?.user?.image!}
          alt="avatar"
          className="ml-auto h-10 w-10 rounded-full object-cover cursor-pointer"
        />
      )}
    </header>
  );
};

export default Header;
