import { StyledImageWrapper, StyledImage } from './Image.styles'

import type { ImageProps } from './Image.types'
import type { FC } from 'react'

const Image: FC<ImageProps> = ({ src, altText }) => {
  const imagePlaceholder = 'https://images.unsplash.com/photo-1647961154167-055527592cbb'

  return (
    <StyledImageWrapper>
      <StyledImage className="card-img-top" src={imagePlaceholder} alt={altText} data-src={src} />
    </StyledImageWrapper>
  )
}

export default Image
