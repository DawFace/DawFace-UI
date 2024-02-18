import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [visibility, setVisibility] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'kim' && password === 'dawson') {
      Cookies.set(
        'loggedUser',
        JSON.stringify({ username: username, password: password })
      );
      setErrorMsg('Logged successfully');
      navigate('/');
    } else if (username.trim() === '' || password.trim() === '') {
      setErrorMsg('* Username and password required');
    } else if (username.trim() !== 'kim') {
      setErrorMsg('* Invalid username');
    } else if (username.trim() === 'kim' && password.trim() !== 'dawson') {
      setErrorMsg('* Invalid password');
    } else if (username !== 'kim' && password !== 'dawson') {
      setErrorMsg('* Invalid username and password');
    } else {
      setErrorMsg('* Username or password invalid');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrorMsg('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMsg('');
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEnterKeyDown, true);
  });

  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="bg-zinc-900 flex items-center justify-center h-screen">
      <div className="absolute h-[150px] w-[150px] bg-primary rounded-full blur-md animate-bounce-more"></div>
      <div className="bg-zinc-900/30 md:shadow-xl md:shadow-zinc-950 md:rounded-2xl z-10 w-full max-w-xs flex flex-col items-center justify-center">
        <div>
          <img
            src="src/assets/img/face-scan-square.svg"
            alt="face-recognition-icon"
            className="scale-[0.7]"
          />
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
              onChange={handleUsernameChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="bg-zinc-800 flex items-center rounded-lg py-3 px-5 focus:border-solid border border-gray-700 hover:border-gray-500">
            <FontAwesomeIcon className="text-white" icon={faLock} />
            <label className="hidden" htmlFor="password">
              Password
            </label>
            <input
              className="bg-transparent tracking-wide text-sm border-none w-full px-3 text-white placeholder:text-gray focus:outline-none"
              id="password"
              type={visibility ? 'text' : 'password'}
              placeholder="Password"
              onChange={handlePasswordChange}
              autoComplete="off"
              required
            />
            <div
              className="text-white"
              onClick={() => setVisibility(!visibility)}
            >
              {visibility ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </div>
          <div className="inline-block text-red-400 text-[13px] mt-3">
            {errorMsg}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="text-white py-2 px-4 w-full rounded-lg bg-primary hover:opacity-90 mt-3"
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
