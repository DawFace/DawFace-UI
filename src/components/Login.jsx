import { useState } from "react";

const Login = () => {
  // hook the height of the header for animation
  const [headerHeight, setHeaderHeight] = useState("h-5/6");

  // toggle and retract the login form on click
  const toggleLogin = () => {
    headerHeight === "h-5/6"
      ? setHeaderHeight("h-full")
      : setHeaderHeight("h-5/6");
  };

  return (
    // ---- Login background ----
    <div
      onClick={toggleLogin}
      className="bg-gradient-to-r 
      from-red-500 
      via-blue-400 
      to-blue-900 
        w-full h-screen flex justify-center sm:p-10 z-0"
    >
      {/* ---- Header as login container ---- */}
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
        {/* ---- will contain an image representing face recognition ---- */}
        <div className="bg-secondary h-[480px] m-3"></div>

        {/* ---- Contain welcoming text --- */}
        <div className="text-center flex flex-col items-center">
          <p className="md:text-5xl sm:text-4xl mt-10 select-none">
            Welcome to DawFace
          </p>
          <p className="text-xl mt-3 text-gray-400 select-none">
            Your face recognition system
          </p>
        </div>

        {/* ---- Login-Form container (in progress) --- */}
        <div>
          <form action="" className="flex flex-col items-center">
            <input
              type="text"
              name="email or username"
              placeholder="Email or username"
            />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </header>

      {/* ---- Button that toggle the login-form for design purpose only --- */}
      <button
        onClick={toggleLogin}
        className="bg-secondary 
          h-[80px] w-[80px] 
          absolute m-auto bottom-12 left-0 right-0 
          rounded-full 
          z-10
          hover:scale-110
          transition-scale ease-out duration-300"
      ></button>
    </div>
  );
};

export default Login;
