interface INodesItem {
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
  followers: { totalCount: number }
  following: { totalCount: number }
  bio: string | null
  repositories: IRepositories | null
}

export interface IUsersItem {
  id: string | null
  name: string | null
  login: string | null
  avatarUrl: string | null
  totalRepoCount: number | null
}

export interface IStoreProviderState {
  user?: IUser | null
  users?: Array<IUsersItem>
}

export interface IContextApp extends IStoreProviderState {
  searchUsersByName: (name: string) => void
  getUserByName: (name: string, totalCount: number) => void
}
