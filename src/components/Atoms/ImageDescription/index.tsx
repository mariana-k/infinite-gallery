import { StyledImageDescription } from './ImageDescription.styles'

import type { ImageDescriptionProps } from './ImageDescription.types'
import type { FC } from 'react'

const Image: FC<ImageDescriptionProps> = ({ text }) => {
  const textPlaceholder = 'This is an image'

  return <StyledImageDescription>{text ? text : textPlaceholder}</StyledImageDescription>
}

export default Image
