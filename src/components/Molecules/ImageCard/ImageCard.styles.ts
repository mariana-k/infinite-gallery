import styled from 'styled-components'
import { width, breakpoints } from '../../../styles/global'

export const StyledImageCardWrapper = styled.div<{ cardHeight: number }>`
  --h: ${(props) => (props.cardHeight ? props.cardHeight : 500)};
  --w: 400;
  margin: ${width.gap};

  @media (min-width: ${breakpoints.m}) {
    --img-proportional-height: calc(var(--h) * var(--_col-width) / (var(--w)));
    grid-row-end: span var(--img-proportional-height, 240);
    overflow: hidden;

    &:not(:last-child) {
      margin-bottom: var(--_gap);
    }
  }
`
