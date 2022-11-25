import { StyledImageWrapper, StyledImage } from './Image.styles'

import type { ImageProps } from './Image.types'
import type { FC } from 'react'

const Image: FC<ImageProps> = ({ src, altText }) => {
  const imagePlaceholder =
    'https://images.unsplash.com/photo-1560780552-ba54683cb263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODMyOTN8MHwxfHNlYXJjaHw1N3x8Z3JleXxlbnwwfHx8fDE2NjkzNzY0MDA&ixlib=rb-4.0.3&q=80&w=400'

  return (
    <StyledImageWrapper>
      <StyledImage className="card-img-top" src={imagePlaceholder} alt={altText} data-src={src} />
    </StyledImageWrapper>
  )
}

export default Image
