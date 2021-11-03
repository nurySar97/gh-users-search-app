export const searchQuery = (query: string): string => {
  return `
  {
    search(query: "${query} in:login in:name", type: USER, first: 100) {
      nodes {
        ... on User {
          id
          name
          login,
          avatarUrl,
          repositories(first: 100) {
            totalCount
          }
        }
      }
    }
  }`
}

export const userRepoQuery = (login: string, repoName: string) => {
  return `
  {
    search(query: "user:${login} ${repoName} in:name", type: REPOSITORY, first:100) {
      nodes {
        ...on Repository{
          forkCount,
          stargazerCount,
          name
        }
      }
    }
  }`
}

export const userQuery = (login: string = ''): string => {
  return `
  {
    user(login: "${login}"){
        name,
        login
        email,
        avatarUrl,
        location,
        createdAt,
        followers {totalCount},
        following {totalCount},
        bio
    }
  }`
}
