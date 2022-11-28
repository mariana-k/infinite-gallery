import styled from 'styled-components'
import { radius, breakpoints } from '../../../styles/global'

export const StyledImage = styled.img`
  width: 100%;
  border-radius: ${radius.regular};

  @media (min-width: ${breakpoints.m}) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
