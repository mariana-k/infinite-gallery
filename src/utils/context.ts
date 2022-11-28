import { createContext, Dispatch, SetStateAction } from 'react'

export type ISearch = {
  value: string
  newValue: string
  isNew: boolean
}
const defaultValue = 'All'
export const defaultSearch = { value: defaultValue, newValue: defaultValue, isNew: true }
type ISearchContext = [ISearch, Dispatch<SetStateAction<ISearch>>]
export const Context = createContext<ISearchContext>([defaultSearch, () => null])
