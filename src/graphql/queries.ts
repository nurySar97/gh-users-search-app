export const searchQuery = (query: string): string => {
  return `
  {
    search(type: USER, query: "${query}",  first: 100) {
      nodes {
        ...on User {
          id,
          avatarUrl,
          name,
          login
          repositories{
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
