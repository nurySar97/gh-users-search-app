import React, { createContext } from 'react'
import { IContextApp, IStoreProviderState } from './../interfaces/context'
import oktakitGraphql from './../graphql'

const defaultState = {
  user: {
    name: null,
    avatarUrl: null,
    bio: null,
    createdAt: null,
    email: null,
    followers: { totalCount: 0 },
    following: { totalCount: 0 },
    login: null,
    location: null,
    repositories: {
      nodes: []
    }
  },
  users: []
}

export const AppContext = createContext<IContextApp>({
  getUserByName: () => {},
  searchUsersByName: () => {},
  ...defaultState
})

class StoreProvider extends React.Component<object, IStoreProviderState> {
  state = defaultState

  constructor (props: {}) {
    super(props)
    this.searchUsersByName = this.searchUsersByName.bind(this)
    this.getUserByName = this.getUserByName.bind(this)
  }

  async searchUsersByName (name = '') {
    if (name) {
      const response = await oktakitGraphql.searchUsers(name)
      if (!response['error']) {
        this.setState({ users: response['data'] })
      }
      return response['error']
    } else {
      this.setState({ users: [] })
      return false
    }
  }

  async getUserByName (name = '') {
    if (name) {
      const response = await oktakitGraphql.getUser(name)
      if (!response['error']) {
        this.setState({ user: response['data'] })
      }
      return response['error']
    }
    return false
  }

  render () {
    return (
      <AppContext.Provider
        value={{
          users: this.state.users,
          user: this.state.user,
          searchUsersByName: this.searchUsersByName,
          getUserByName: this.getUserByName
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default StoreProvider
