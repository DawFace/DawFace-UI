import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser({username, password})
    axios.post('https://example.com/api', { 
        headers: {
          username: 'username',
          password: 'password'
        } 
      })
      .then(response => {
        console.log('Success', response.data);
      })
      .catch(error => {
        if (error.response) {
          console.log("No server response");
        } else if (error.response.status === 400) {
          console.log("Missing username or Password");
        } else if (error.response.status === 401) {
          console.log("Missing username or Password");
        } else {
          console.log("Login failed");
        }
      });
  }
    return (
      <form action="/home" className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="mt-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          required
        />
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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
  