import { AuthContext } from '../AuthContext.jsx';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      if (username === 'kim' && password === 'dawson') {
        setUser({ username: username, password: password });
        navigate('/');
      } else {
        alert('Invalid username or password');
      }
    }
  };

  return (
    <div className="bg-zinc-900 flex items-center justify-center h-screen">
      <div className='absolute h-[150px] w-[150px] bg-primary rounded-full blur-md animate-bounce-more'></div>
      <div className="bg-zinc-900/30 shadow-xl shadow-zinc-950 rounded-2xl z-10 w-full max-w-xs flex flex-col items-center justify-center">
      <div>
        <img src="src/assets/img/face-scan-square.svg" alt='face-recognition-icon' 
          className='scale-75'/>
      </div>
        <p className="text-white font-bold text-3xl">DawFace</p>
        <p className="text-gray-600">Your face recognition system</p>
        <form className="px-8 pt-6 pb-8">
          <div className="bg-zinc-800 mb-4 flex items-center rounded-lg py-3 px-5 focus:border-solid border border-gray-700 hover:border-gray-500">
            <FontAwesomeIcon className="text-white" icon={faUser} />
            <label className="hidden" htmlFor="username">
              Username
            </label>
            <input
              className="bg-transparent tracking-wide text-sm border-none w-full px-3 text-white placeholder:text-gray focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete='off'
            />
          </div>
          <div className="bg-zinc-800 mb-8 flex items-center rounded-lg py-3 px-5 focus:border-solid border border-gray-700 hover:border-gray-500">
          <FontAwesomeIcon className='text-white' icon={faLock} />
            <label className="hidden" htmlFor="password">
              Password
            </label>
            <input
              className="bg-transparent tracking-wide text-sm border-none w-full px-3 text-white placeholder:text-gray focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete='off'
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="text-white py-2 px-4 w-full rounded-lg bg-primary hover:opacity-90"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
