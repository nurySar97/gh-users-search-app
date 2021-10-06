import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router'
import useStore from '../hooks/useContext'
import Input from './../components/input'
import { INodesItem } from './../interfaces/context'
import UserInfo from './../components/userInfo'
import Spinner from './../components/spinner'
import RepoList from './../components/repoList'

interface IParams {
  login: string
}

const Default: React.FC = () => {
  const { login } = useParams<IParams>()
  const { getUserByName, user } = useStore()
  const { repositories } = user
  const [value, setValue] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState<boolean>(true)
  const [repos, setRepos] = useState<INodesItem[]>(repositories.nodes)
  const [error, setError] = useState<boolean>(false)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)

    if (!value) return setRepos([])

    setRepos(() =>
      repositories.nodes.filter(item =>
        new RegExp(value, 'i').test(`{${item.name}}`)
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
      <div className='main-inner py-3 px-3 p-sm-3 br-3 rounded-3'>
        {isLoaded ? (
          <React.Fragment>
            <UserInfo user={user} />
            <Input
              onInputChange={onInputChange}
              value={value}
              placeholder={"Search for User's Repositories"}
            />
            {!!value && !!repos.length ? (
              <RepoList repos={repos} login={login} />
            ) : (
              <div className='text-center'>No result yet</div>
            )}
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    </main>
  )
}

export default Default
