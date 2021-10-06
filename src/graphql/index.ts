import { graphql } from '@octokit/graphql'
import { searchQuery, userQuery } from './queries'
const REACT_APP_TOKEN: string = 'token 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'

class OktakitGraphql {
  graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: REACT_APP_TOKEN
    }
  })

  async searchUsers (name: string) {
    try {
      const { search: nodes }: any = await this.graphqlWithAuth(
        searchQuery(name)
      )
      return nodes
    } catch (error) {
      console.error(error)
    }
  }

  async getUser (name: string, totalCount: number) {
    try {
      const { user } = await this.graphqlWithAuth(userQuery(name, totalCount))
      return user
    } catch (error) {
      console.error(error)
    }
  }
}

export default new OktakitGraphql()
