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

export const userQuery = (name: string = 'nurySar97'): string => {
  return `
  {
    user(login: "${name}"){
        name,
        login
        email,
        avatarUrl,
        location,
        createdAt,
        followers {totalCount},
        following {totalCount},
        bio,
        repositories(first: 100) {
          nodes {
            ...on Repository {
              forkCount,
              stargazerCount,
              name
            }
          }
        }
    }
  }`
}
