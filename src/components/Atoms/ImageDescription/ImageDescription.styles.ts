import styled from 'styled-components'
import { color, typography } from '../../../styles/global'

export const StyledImageDescription = styled.h3`
  color: ${color.primary};
  ${typography.imageDescription}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @keyframes fadeIn {
    99% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
  animation: 1s fadeIn;
  animation-fill-mode: forwards;
  visibility: hidden;
`
