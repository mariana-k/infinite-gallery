import { createContext, Dispatch, SetStateAction } from 'react'
import { Img } from '../components/Containers/Gallery/Gallery.types'

export type ISearch = {
  value: string
  newValue: string
  isNew: boolean
  images: Img[]
}
const defaultValue = 'All'
export const defaultSearch = { value: defaultValue, newValue: defaultValue, isNew: true, images: [] }
type ISearchContext = [ISearch, Dispatch<SetStateAction<ISearch>>]
export const Context = createContext<ISearchContext>([defaultSearch, () => null])
