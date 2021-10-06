export interface INodesItem {
  forkCount: number | null
  stargazerCount: number | null
  name: string | null
}

export interface IRepositories {
  nodes: Array<INodesItem>
}

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
  repositories: IRepositories
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
  user: IUser
  users: Array<IUsersItem>
}

export interface IContextApp extends IStoreProviderState {
  searchUsersByName: (name: string) => Promise<boolean> | void
  getUserByName: (name: string) => Promise<boolean> | void
}
