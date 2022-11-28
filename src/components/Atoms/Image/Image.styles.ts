import styled from 'styled-components'
import { radius, breakpoints } from '../../../styles/global'

export const StyledImage = styled.img`
  width: 100%;
  border-radius: ${radius.regular};

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

  @media (min-width: ${breakpoints.m}) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
