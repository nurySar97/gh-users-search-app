export const searchQuery = (query: string): string => {
  return `
  {
    search(type: USER, query: "${query}",  first: 10) {
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

export const userQuery = (
  name: string = 'nurySar97',
  totalCount: number
): string => {
  return `
  {
    user(login: "${name}"){
        name,
        login
        email,
        avatarUrl,
        createdAt,
        followers {totalCount},
        following {totalCount},
        bio,
        repositories(first: ${totalCount}) {
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
