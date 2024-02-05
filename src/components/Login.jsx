import { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  const [headerHeight, setHeaderHeight] = useState('h-5/6');
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [loginFormScale, setLoginFormScale] = useState('scale-0')
  const [loginDisplay, setLoginDisplay] = useState('hidden')


  const toggleLogin = () => {
    headerHeight === 'h-5/6' ? setHeaderHeight('h-full') : setHeaderHeight('h-5/6');
    showLoginForm === true ? setShowLoginForm(false) : setShowLoginForm(true);
    loginFormScale === 'scale-0' ? setLoginFormScale('scale-100') : setLoginFormScale('scale-0');
    loginDisplay === 'hidden' ? setLoginDisplay('display') : setLoginDisplay('hidden')
  };

  return (
    <div
      className="bg-gradient-to-r 
      from-red-500 
      via-blue-400 
      to-blue-900 
        w-full h-screen flex justify-center sm:p-10 z-0"
    >
      <header
        className={`
          transition-all
        bg-white 
          md:w-[800px] 
          ${headerHeight}
          sm:w-full 
          drop-shadow-2xl 
          z-40
          transition-all ease-out duration-500`}
      >
        <div className="bg-secondary h-[480px] w-[98%] m-2"></div>

        <div className="text-center flex flex-col items-center">
          <p className="md:text-5xl sm:text-4xl mt-10 select-none">Welcome to DawFace</p>
          <p className="text-xl mt-3 text-gray-400 select-none">Your face recognition system</p>
        </div>
        
        <div className={`${loginFormScale} transition-all duration-500 ease-out`}><LoginForm /></div>

        <div onClick={toggleLogin}
          className='bg-gray-700 
          w-1/6 h-[7px] rounded-full 
          absolute bottom-3 left-0 right-0 m-auto
          hover:cursor-pointer'></div>
      </header>

    </div>
  );
};

export default Login;
