import React, { useEffect, useRef, useState } from 'react'
import { Redirect, useParams } from 'react-router'
import useStore from '../hooks/useStore'
import Input from './../components/input'
import { IUserReposItem } from './../interfaces/context'
import UserInfo from './../components/userInfo'
import Spinner from './../components/spinner'
import RepoList from './../components/repoList'

interface IParams {
  login: string
}

const Default: React.FC = () => {
  const timeOut = useRef<any>(null)
  const { login } = useParams<IParams>()
  const { getUserByName, user, userRepos, searchUserRepoByName } = useStore()
  const [value, setValue] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isUserFetched, setIsUserFetched] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const repositories: Array<IUserReposItem> = userRepos

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeOut.current)
    const value: string = event.target.value
    setValue(value)
    setIsLoaded(false)
    if (!value) {
      setIsLoaded(true)
      searchUserRepoByName(login, value)
      return
    }
  }

  useEffect(() => {
    void (async function () {
      const response = await getUserByName(login)
      response && setError(response)
      setIsUserFetched(true)
    })()
  }, [getUserByName, login])

  useEffect(() => {
    if (!value) return
    timeOut.current = setTimeout(async function fetchUsers() {
      await searchUserRepoByName(login, value)
      await setIsLoaded(true)
    }, 1100)
  }, [value, searchUserRepoByName, login])

  if (error) return <Redirect to='/' />

  return (
    <main className='main'>
      <div className='main-inner p-3 br-3 rounded-3'>
        {!isUserFetched && <Spinner />}

        {isUserFetched && (
          <React.Fragment>
            <UserInfo user={user} />
            <Input
              onInputChange={onInputChange}
              value={value}
              placeholder={"Search for user's repositories..."}
            />

            {value ? isLoaded ? <RepoList
              repos={repositories}
              login={login}
            /> : <Spinner /> : <div className='text-center fs-4'>Enter please repository name... </div>}
          </React.Fragment>
        )}
      </div>
    </main>
  )
}

export default Default
