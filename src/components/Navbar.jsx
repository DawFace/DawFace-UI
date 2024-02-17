import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="w-screen py-2 px-5 flex items-center justify-between">
        <Link to={'/'} className="text-white font-extrabold tracking-tighter text-3xl">
          DawFace
        </Link>
        <div>
          <Link
            to={'/login'}
            className="text-white py-2 px-4 w-full rounded-lg 
            bg-primary hover:bg-primary/70 border-solid border border-zinc-900 hover:border hover:border-white
            transition-colors ease-out"
          >
            Sign out
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
