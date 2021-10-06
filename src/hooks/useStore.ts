import { useContext } from 'react'
import { StoreContext } from '../context'
import { IStoreContextDefaultValues } from '../interfaces/context'

const useStore = (): IStoreContextDefaultValues => useContext(StoreContext)

export default useStore
