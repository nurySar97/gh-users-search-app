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
    location: null
  },
  userRepos: [],
  users: []
}

export const StoreContext = createContext<IStoreContextDefaultValues>({
  getUserByName: () => { },
  searchUsersByName: () => { },
  searchUserRepoByName: () => { },
  ...defaultState
})

class StoreProvider extends React.Component<{}, IStoreProviderState> {
  state = defaultState

  constructor(props: {}) {
    super(props)
    this.searchUsersByName = this.searchUsersByName.bind(this)
    this.getUserByName = this.getUserByName.bind(this)
    this.searchUserRepoByName = this.searchUserRepoByName.bind(this)
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

  async searchUserRepoByName(user = "", repoName = "") {
    if (user && repoName) {
      const { error, data } = await oktakitGraphql.searchUserRepo(user, repoName)
      if (!error) {
        this.setState({ userRepos: data })
      }
      return error
    }
    this.setState({ userRepos: [] })
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
          user: this.state.user,
          userRepos: this.state.userRepos,
          users: this.state.users,
          searchUsersByName: this.searchUsersByName,
          getUserByName: this.getUserByName,
          searchUserRepoByName: this.searchUserRepoByName
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider
