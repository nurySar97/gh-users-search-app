import React, { createContext } from 'react'
import { IStoreContextDefaultValues, IStoreProviderState } from './../interfaces/context'
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

export const StoreContext = createContext<IStoreContextDefaultValues>({
  getUserByName: () => { },
  searchUsersByName: () => { },
  ...defaultState
})

class StoreProvider extends React.Component<{}, IStoreProviderState> {
  state = defaultState

  constructor(props: {}) {
    super(props)
    this.searchUsersByName = this.searchUsersByName.bind(this)
    this.getUserByName = this.getUserByName.bind(this)
  }

  async searchUsersByName(name = '') {
    if (name) {
      const { error, data } = await oktakitGraphql.searchUsers(name)
      if (!error) {
        this.setState({ users: data })
      }
      return error
    }
    this.setState({ users: [] })
    return false
  }

  async getUserByName(name = '') {
    if (name) {
      const { error, data } = await oktakitGraphql.getUser(name)
      if (!error) {
        this.setState({ user: data })
      }
      return error
    }
    return false
  }

  render() {
    return (
      <StoreContext.Provider
        value={{
          users: this.state.users,
          user: this.state.user,
          searchUsersByName: this.searchUsersByName,
          getUserByName: this.getUserByName
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider
