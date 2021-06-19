import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions';

function LogIn() {
  const [info, setInfo] = useState({ login: '', password: '' });
  const dispatch = useDispatch();
  function handleChange({ target: { name, value } }) {
    setInfo(((state) => ({ ...state, [name]: value })));
  }
  function handleClick() {
    dispatch(allActions.userActions.defaultAction(info));
    setInfo({ login: '', password: '' });
  }
  return (
    <>
      <input onChange={handleChange} value={info.login} name="login" type="text" />
      <input onChange={handleChange} value={info.password} name="password" type="text" />
      <button onClick={() => handleClick()} type="button">Send</button>

    </>
  );
}

export default LogIn;
