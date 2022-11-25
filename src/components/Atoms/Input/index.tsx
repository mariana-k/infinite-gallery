import { useContext } from 'react'
import { StyledInputWrapper, StyledInput } from './Input.styles'
import { Context } from '../../../utils/context'

import type { InputProps } from './Input.types'
import type { FC } from 'react'

const Image: FC<InputProps> = ({ placeholder }) => {
  const [context, setContext] = useContext(Context)
  const handleContext = (e: React.FormEvent<HTMLInputElement>) => {
    setContext({ ...context, value: e.currentTarget.value, isNew: false })
  }

  return (
    <StyledInputWrapper>
      <StyledInput type="text" placeholder={placeholder} value={context.value} onChange={handleContext} />
    </StyledInputWrapper>
  )
}

export default Image
