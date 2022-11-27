import { useRef, useState, useEffect } from 'react'
import type { FC } from 'react'
import { StyledImage } from './Image.styles'
import type { ImageProps } from './Image.types'

const Image: FC<ImageProps> = ({ src, altText }) => {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const imagePlaceholder =
    'https://images.unsplash.com/photo-1560780552-ba54683cb263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODMyOTN8MHwxfHNlYXJjaHw1N3x8Z3JleXxlbnwwfHx8fDE2NjkzNzY0MDA&ixlib=rb-4.0.3&q=80&w=400'
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
      className="card-img-top mm-masonry__img"
      src={imagePlaceholder}
      alt={altText}
      data-src={src}
    />
  )
}

export default Image
