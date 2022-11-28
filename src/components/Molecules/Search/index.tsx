import { useContext } from 'react'
import { StyledSearchWrapper } from './Search.styles'
import type { SearchProps } from './Search.types'
import type { FC } from 'react'
import Input from '../../Atoms/Input'
import Button from '../../Atoms/Button'
import { Context } from '../../../utils/context'

const Search: FC<SearchProps> = ({ input, button }) => {
  const [context] = useContext(Context)

  return (
    <StyledSearchWrapper>
      <Input placeholder={input?.placeholder} value={context.value} />
      <Button value={button?.value} />
    </StyledSearchWrapper>
  )
}

export default Search
