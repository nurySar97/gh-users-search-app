import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router'
import useStore from '../hooks/useStore'
import Input from './../components/input'
import { IReposNodesItem } from './../interfaces/context'
import UserInfo from './../components/userInfo'
import Spinner from './../components/spinner'
import RepoList from './../components/repoList'

interface IParams {
  login: string
}

const Default: React.FC = () => {
  const { login } = useParams<IParams>()
  const { getUserByName, user } = useStore()
  const [value, setValue] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [repos, setRepos] = useState<IReposNodesItem[]>([])
  const repositories: Array<IReposNodesItem> = user.repositories.nodes

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
    if (!value) return setRepos([])
    setRepos(
      repositories.filter(item =>
        String(item.name).includes(value)
      )
    )
  }

  useEffect(() => {
    void (async function () {
      const response = await getUserByName(login)
      response && setError(response)
      setIsLoaded(true)
    })()
  }, [getUserByName, login])

  if (error) return <Redirect to='/' />
  return (
    <main className='main'>
      <div className='main-inner p-3 br-3 rounded-3'>
        {!isLoaded && <Spinner />}

        {isLoaded && (
          <React.Fragment>
            <UserInfo user={user} />
            <Input
              onInputChange={onInputChange}
              value={value}
              placeholder={"Search for user's repositories..."}
            />
            <RepoList
              countOfRepos={repositories.length}
              repos={repos}
              login={login}
            />
          </React.Fragment>
        )}
      </div>
    </main>
  )
}

export default Default
