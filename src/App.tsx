import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Main, User } from './pages'
import Header from './components/header'

const App: React.FC = () => {
  return (
    <div className='app'>
      <div className='container'>
        <div className='py-3'>
          <Header />
          <Switch>
            <Route exact path={'/'} component={Main} />
            <Route exact path={'/user'} render={() => <Redirect to='/' />} />
            <Route path={'/user/:login'} component={User} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
