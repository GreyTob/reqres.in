import classes from './App.module.scss'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Users from './components/Users/Users'

function App() {
  return (
    <div className={classes.App}>
      <NavLink to="/">Users</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/profile:name" component={Profile} /> */}
        <Redirect path="/" />
      </Switch>
    </div>
  )
}

export default App
