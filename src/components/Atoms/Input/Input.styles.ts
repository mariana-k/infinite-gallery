import styled from 'styled-components'
import { width, height, radius, color } from '../../../styles/global'

export const StyledInputWrapper = styled.div`
  width: ${width.input};
`

export const StyledInput = styled.input`
  width: 100%;
  height: ${height.input};
  box-sizing: border-box;
  border-radius: ${radius.big};
  padding: ${width.gap};
  color: ${color.dark};
  background: ${color.light};
  border: none;

  &:focus,
  &:active,
  &:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }
`
