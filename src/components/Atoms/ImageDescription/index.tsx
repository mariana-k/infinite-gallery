import { ImageDescription } from './ImageDescription.styles'

import type { ImageDescriptionProps } from './ImageDescription.types'
import type { FC } from 'react'

const Image: FC<ImageDescriptionProps> = ({ text }) => {
  const textPlaceholder = 'This is an image'

  return <ImageDescription>{text ? text : textPlaceholder}</ImageDescription>
}

export default Image
