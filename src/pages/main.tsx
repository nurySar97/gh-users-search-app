import React, { useEffect, useRef, useState } from 'react'
import useStore from '../hooks/useStore'
import Input from './../components/input'
import Spinner from './../components/spinner'
import UsersList from './../components/usersList'

const Default: React.FC = () => {
  const { searchUsersByName, users } = useStore()
  const [value, setValue] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const timeOut = useRef<any>(null)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeOut.current)
    const value: string = event.target.value

    setValue(value)
    setIsLoaded(false)

    if (!value) {
      setIsLoaded(true)
      searchUsersByName('')
      return
    }
  }

  useEffect(() => {
    if (!value) return

    timeOut.current = setTimeout(async function fetchUsers() {
      await searchUsersByName(value)
      await setIsLoaded(true)
    }, 1100)

  }, [value, searchUsersByName])

  return (
    <main className='main'>
      <div className='main-inner p-3 br-3 rounded-3'>
        <Input
          onInputChange={onInputChange}
          placeholder={'Search user...'}
          value={value}
        />
        {value ? isLoaded ? <UsersList users={users} /> : <Spinner /> : <div className='text-center'>Enter please user name or login...</div>}
      </div>
    </main>
  )
}

export default Default
