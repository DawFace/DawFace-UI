import axios from 'axios';
import Cookies from 'js-cookie';

export const getRequest = async (url) => {
  if (Cookies.get('loggedUser') !== undefined) {
    const loggedUser = JSON.parse(Cookies.get('loggedUser'));
    return (
      await axios.get(url, {
        auth: {
          username: loggedUser.username,
          password: loggedUser.password,
        },
      })
    ).data;
  } else {
    return (await axios.get(url)).data;
  }
};
