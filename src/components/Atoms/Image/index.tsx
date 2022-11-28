import { useRef } from 'react'
import type { FC } from 'react'
import { StyledImage } from './Image.styles'
import type { ImageProps } from './Image.types'

const Image: FC<ImageProps> = ({ src, altText }) => {
  const imgElement = useRef<HTMLImageElement>(null)
  const minImageHeight = 300

  return (
    <StyledImage
      ref={imgElement}
      data-height={
        imgElement ? (imgElement.current ? imgElement.current.naturalHeight : minImageHeight) : minImageHeight
      }
      src={src}
      alt={altText}
      data-src={src}
    />
  )
}

export default Image
