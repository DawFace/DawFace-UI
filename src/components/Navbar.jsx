import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="w-screen py-2 px-5 flex items-center justify-between">
        <Link to={'/home'} className="font-extrabold tracking-tighter text-3xl">
          DawFace
        </Link>
        <div>
          <Link
            to={'/'}
            className="bg-tertiary font-semibold 
            px-8 py-2 rounded-full w-fit
            hover:bg-secondary hover:text-white
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
