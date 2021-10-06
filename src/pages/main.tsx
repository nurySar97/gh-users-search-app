import React, { useRef, useState } from 'react'
import useStore from '../hooks/useStore'
import Input from './../components/input'
import Spinner from './../components/spinner'
import UsersList from './../components/usersList'

const Default: React.FC = () => {
  const { searchUsersByName, users } = useStore()
  const [value, setValue] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState<boolean>(true)
  const timeOut = useRef<any>(null)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeOut.current)
    const value: string = event.target.value
    setIsLoaded(false)
    setValue(value)

    if (!value) {
      setIsLoaded(true)
      searchUsersByName('')
      return
    }
    timeOut.current = setTimeout(fetchUsers, 800)
  }

  async function fetchUsers () {
    await searchUsersByName(value)
    await setIsLoaded(true)
    clearTimeout(timeOut.current)
  }

  return (
    <main className='main'>
      <div className='main-inner p-3 br-3 rounded-3'>
        <Input
          onInputChange={onInputChange}
          placeholder={'Search users...'}
          value={value}
        />
        {isLoaded ? <UsersList users={users} /> : <Spinner/>}
      </div>
    </main>
  )
}

export default Default
