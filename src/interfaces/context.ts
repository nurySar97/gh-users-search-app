export interface IUser {
  name: string | null
  login: string | null
  email: string | null
  avatarUrl: string | null
  createdAt: string | null
  location: string | null
  followers: { totalCount: number }
  following: { totalCount: number }
  bio: string | null
}

export interface IUserReposItem {
  forkCount: number | null
  stargazerCount: number | null
  name: string | null
}

export interface IUsersItem {
  id: string | null
  name: string | null
  login: string | null
  avatarUrl: string | null
  repositories: {
    totalCount: number
  }
}

export interface IStoreProviderState {
  user: IUser,
  userRepos: Array<IUserReposItem>,
  users: Array<IUsersItem>,
}

export interface IStoreContextDefaultValues extends IStoreProviderState {
  searchUsersByName: (name: string) => Promise<boolean> | void
  searchUserRepoByName: (login: string, repoName: string) => Promise<boolean> | void
  getUserByName: (name: string) => Promise<boolean> | void
}
