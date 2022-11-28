import { useRef, useState, useEffect } from 'react'
import type { FC } from 'react'
import { StyledImage } from './Image.styles'
import type { ImageProps } from './Image.types'

const Image: FC<ImageProps> = ({ src, altText }) => {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
 const imgElement = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setHeight(imgElement ? (imgElement.current ? imgElement.current.naturalHeight : 0) : 0)
    setWidth(imgElement ? (imgElement.current ? imgElement.current.naturalWidth : 0) : 0)
  }, [height])

  return (
    <StyledImage
      ref={imgElement}
      data-height={imgElement ? (imgElement.current ? imgElement.current.naturalHeight : 0) : 0}
      data-width={width}
      src={src}
      alt={altText}
      data-src={src}
    />
  )
}

export default Image
