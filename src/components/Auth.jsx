import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { auth } from "../context/authActions";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const registerHandler = () => {
    dispatch(auth(email, password, false));
  };

  const loginHandler = () => {
    dispatch(auth(email, password, true));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Авторизация</h1>
      <form onSubmit={submitHandler}>
        <div style={{marginBottom: 30}}>
          <TextField
            id="outlined-disabled"
            label="E-mail"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div style={{marginBottom: 30}}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>

        <Button variant="contained" color="primary" onClick={loginHandler} style={{marginRight: 20}}>
          Войти
        </Button>
        <Button variant="contained" color="secondary" onClick={registerHandler}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default Auth;
