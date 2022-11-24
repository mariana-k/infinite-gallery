import { useContext } from 'react'
import { SearchWrapper } from './Search.styles'
import type { SearchProps } from './Search.types'
import type { FC } from 'react'
import Input from '../../Atoms/Input'
import Button from '../../Atoms/Button'
import { Context } from '../../../utils/context'

const Search: FC<SearchProps> = ({ input, button }) => {
  const context = useContext(Context);

  return (
    <SearchWrapper>
      <Input placeholder={input?.placeholder} value={context} />
      <Button value={button?.value} />
    </SearchWrapper>
  )
}

export default Search
