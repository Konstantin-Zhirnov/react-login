import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: "70px",
    marginRight: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    textTransform: "uppercase",
  },
}));

export default function ButtonAppBar() {
  const token = useSelector(state => state.auth.token)
  const isAuthenticated = !!token

  const classes = useStyles();

  let headerContex = (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to={"/"}>
            <img src="/images/4.png" alt="logotip" className={classes.logo} />
          </NavLink>
          <Typography variant="h6" className={classes.title}>
            Заготовка для авторизации
          </Typography>
          <NavLink to={"/"} className={classes.link}>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to={"/auth"} className={classes.link}>
            <Button color="inherit">Login</Button>
          </NavLink>          
        </Toolbar>
      </AppBar>
    </div>
  );

  if (isAuthenticated) {
    headerContex = (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <NavLink to={"/"}>
              <img src="/images/4.png" alt="logotip" className={classes.logo} />
            </NavLink>
            <Typography variant="h6" className={classes.title}>
              Заготовка для авторизации
            </Typography>
            <NavLink to={"/"} className={classes.link}>
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink to={"/about"} className={classes.link}>
              <Button color="inherit">About</Button>
            </NavLink>
            <NavLink to={"/logout"} className={classes.link}>
              <Button color="inherit">Logout</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return ( <>{ headerContex } </>)
}
