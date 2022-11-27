import styled from 'styled-components'
import { width } from '../../../styles/global'

export const ImageCardWrapper = styled.div<{ cardHeight: number; cardWidth: number }>`
  --h: ${(props) => (props.cardHeight ? props.cardHeight : 500)};
  --w: ${(props) => (props.cardWidth ? props.cardWidth : 400)};
  margin: ${width.gap};
`
