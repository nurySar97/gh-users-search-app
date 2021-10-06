import React, { useRef, useState } from 'react'
import useStore from '../hooks/useContext'
import Input from './../components/input'
import Spinner from './../components/spinner'
import UsersList from './../components/usersList'

const Default: React.FC = () => {
  const { searchUsersByName, users } = useStore()
  const [value, setValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const timeOut = useRef<any>(null)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeOut.current)
    const value: string = event.target.value
    setIsLoading(() => true)
    setValue(value)

    if (!value) {
      setIsLoading(() => false)
      searchUsersByName('')
      return
    }
    timeOut.current = setTimeout(fetchUsers, 800)
  }

  async function fetchUsers () {
    await searchUsersByName(value)
    await setIsLoading(() => false)
    clearTimeout(timeOut.current)
  }

  return (
    <main className='main'>
      <div className='main-inner py-3 px-3 p-sm-3 br-3 rounded-3'>
        <Input
          onInputChange={onInputChange}
          placeholder={'Search users...'}
          value={value}
        />

        {isLoading ? (
          <Spinner />
        ) : users.length ? (
          <UsersList users={users} />
        ) : (
          <div className='text-center'>No result yet</div>
        )}
      </div>
    </main>
  )
}

export default Default
