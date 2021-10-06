import { useContext } from 'react'
import { AppContext } from '../context'
import { IContextApp } from './../interfaces/context'

const useStore = (): IContextApp => useContext(AppContext)

export default useStore
