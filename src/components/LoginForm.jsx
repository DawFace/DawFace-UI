const LoginForm = () => {
    return (
      <form action="/home" className="flex flex-col items-center">
        <input
          className="mt-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          type="text"
          name="email or username"
          placeholder="Email or username"
        />
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="mt-5 px-3 py-2 bg-secondary shadow-sm text-white rounded-full w-1/5 hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
    );
  };
  
  export default LoginForm;
  