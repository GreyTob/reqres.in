import { Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Profile } from './pages/Profile'
import { Users } from './pages/Users'
import { Info } from './pages/Info'

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/info" component={Info} />
          {/* <Redirect path="/" /> */}
        </Switch>
      </div>
    </>
  )
}

export default App
