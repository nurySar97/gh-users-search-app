import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Main, User } from './pages'

const App: React.FC = () => {
  return (
    <div className='root'>
      <div className='container'>
        <Switch>
          <Route exact path={'/'} render={Main} />
          <Route exact path={'/user'} render={() => <Redirect to='/' />} />
          <Route path={'/user:login'} render={User} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  )
}

export default App
