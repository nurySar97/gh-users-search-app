import { graphql } from '@octokit/graphql'
import { searchQuery, userQuery } from './queries'
const TOKEN: string = 'token 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'

class OktakitGraphql {
  graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: TOKEN
    }
  })

  async searchUsers (name: string) {
    try {
      const {
        search: { nodes }
      }: any = await this.graphqlWithAuth(searchQuery(name))
      return { error: false, data: nodes }
    } catch (error) {
      console.error(error)
      return { error: true, data: null }
    }
  }

  async getUser (name: string) {
    try {
      const { user } = await this.graphqlWithAuth(userQuery(name))
      return { error: false, data: user }
    } catch (error) {
      console.error(error)
      return { error: true, data: null }
    }
  }
}

export default new OktakitGraphql()
