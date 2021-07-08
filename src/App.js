import { Switch, Route, Redirect } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Profile } from './pages/Profile'
import { Users } from './pages/Users'

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/profile/:id" component={Profile} />
          {/* <Route path="/profile:id" component={Profile} /> */}
          <Redirect path="/" />
        </Switch>
      </div>
    </>
  )
}

export default App
