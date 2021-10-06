import React, { createContext } from 'react'
import { IContextApp, IStoreProviderState } from './../interfaces/context'
import oktakitGraphql from './../graphql'

const defaultAppContextValue = {
  getUserByName: () => {},
  searchUsersByName: () => {}
}

export const AppContext = createContext<IContextApp>(defaultAppContextValue)

class StoreProvider extends React.Component<object, IStoreProviderState> {
  constructor (props: {}) {
    super(props)
    this.searchUsersByName = this.searchUsersByName.bind(this)
    this.getUserByName = this.getUserByName.bind(this)
  }
  state = {
    user: {
      name: null,
      avatarUrl: null,
      bio: null,
      createdAt: null,
      email: null,
      followers: { totalCount: 0 },
      following: { totalCount: 0 },
      login: null,
      repositories: {
        nodes: []
      }
    },
    users: []
  }

  async searchUsersByName (name: string) {
    if (name) {
      const users = await oktakitGraphql.searchUsers(name)
      this.setState({ users })
    }
  }

  async getUserByName (name: string = '', totalCount: number = 10) {
    if (name) {
      const user = await oktakitGraphql.getUser(name, totalCount)
      this.setState({ user })
    }
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
