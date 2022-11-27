import styled from 'styled-components'
import { color, typography } from '../../../styles/global'

export const StyledImageDescription = styled.h3`
  color: ${color.primary};
  ${typography.imageDescription}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
