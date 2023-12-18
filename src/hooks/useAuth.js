import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = (to="login") => {
  const history = useNavigate();

  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem('token');

    // If the token doesn't exist, redirect to the login page
    if (!token) {
      history('/login');
    } else {
      // If the token exists, redirect to the home page
      history('/'+to);
    }
  }, [history]);

  return null; // You can return any data or component here as needed
};


export const useAuthenticated = (to) => {
  const history = useNavigate();

  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem('token');

    // If the token doesn't exist, redirect to the login page
    if (!token) {
      history('/'+to);
    } else {
      // If the token exists, redirect to the home page
      history('/');
    }
  }, [history]);

  return null; // You can return any data or component here as needed
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (token == ""  || token == undefined) {
      return false
    } else {
        return true
    }
};

export const logout = () => {
    localStorage.clear('token');
};

