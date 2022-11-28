import styled from 'styled-components'
import { breakpoints } from '../../../styles/global'

export const StyledGalleryWrapper = styled.div`
  --_col-width: 240;
  --_gap: 4;

  @media (min-width: ${breakpoints.m}) {
    --_col-width: var(--col-width, 280);
    --_col-width-px: calc(var(--_col-width) * 1px);
    --_gap: calc(var(--gap, 20) * 1px);
    display: var(--display, grid);
    grid-template-columns: repeat(auto-fill, minmax(var(--_col-width-px), 1fr));
    grid-auto-rows: 1px;
    column-gap: var(--_gap);
  }
`
