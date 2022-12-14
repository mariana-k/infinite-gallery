import { useContext } from 'react'
import { StyledButton } from './Button.styles'
import { Context } from '../../../utils/context'

import type { ButtonProps } from './Button.types'
import type { FC } from 'react'

const Button: FC<ButtonProps> = ({ value }) => {
  const [context, setContext] = useContext(Context)
  const handleContext = () => {
    setContext({ ...context, newValue: context.value, isNew: true })
  }

  return (
    <StyledButton type="button" value={value} onClick={handleContext}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 18C11.125 18 13.078 17.2635 14.6177 16.0319L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9Z"
          fill="white"
        />
      </svg>
    </StyledButton>
  )
}

export default Button
