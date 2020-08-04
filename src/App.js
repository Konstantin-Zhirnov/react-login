import React, { useEffect }  from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector,  useDispatch } from 'react-redux'
import Home from './components/Home'
import About from './components/About'
import Logout from './components/Logout'
import Auth from './components/Auth'
import Header from './components/Header'
import {autoLogin} from './context/authActions'

function App() {

  
  const token = useSelector(state => state.auth.token)
  const isAuthenticated = !!token

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin())
  }, [])

  

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={Home} />
      <Redirect to={'/'} />
    </Switch>
  )

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={Home} />
        <Redirect to={'/'} />
      </Switch>
    )
  }

  return (
    <>
      <Header />
      {routes}
    </>
  )
}

export default App;
