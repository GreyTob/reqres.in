import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Profile } from './pages/Profile'
import { Users } from './pages/Users'
import { Info } from './pages/Info'
import { Context } from './Context'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    let url = `https://reqres.in/api/users?page=${page}`
    axios.get(url).then((response) => {
      setUsers(response.data)
    })
  }, [page])

  const pageHandler = (number) => {
    console.log(page)
    return setPage(number)
  }

  return (
    <>
      <div className="container">
        <NavBar />
        <Context.Provider value={{ users, pageHandler, page }}>
          <Switch>
            <Route path="/" exact component={Users} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/info" component={Info} />
            {/* <Redirect path="/" /> */}
          </Switch>
        </Context.Provider>
      </div>
    </>
  )
}

export default App
