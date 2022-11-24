import { StyledImageWrapper, StyledImage } from './Image.styles'

import type { ImageProps } from './Image.types';
import type { FC } from 'react';

const Image: FC<ImageProps> = ({
  src,
  altText,
}) => {
  const imagePlaceholder = 'https://images.unsplash.com/photo-1606509769472-7660d4a478ac';

  return (
    <StyledImageWrapper>
      <StyledImage className="card-img-top" src={imagePlaceholder} alt={altText} data-src={src} />
    </StyledImageWrapper>
  )
};

export default Image;
