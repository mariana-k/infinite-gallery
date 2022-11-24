import styled from 'styled-components'
import { width, radius, height, color } from '../../../styles/global'

export const StyledButton = styled.button`
  width: ${width.button};
  height: ${height.button};
  border-radius: ${radius.round};
  border: none;
  background: ${color.bright};
  cursor: pointer;
`
