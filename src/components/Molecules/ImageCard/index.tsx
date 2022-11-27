import { useRef } from 'react'
import { useContext, useEffect, useState } from 'react'
import { StyledImageCardWrapper } from './ImageCard.styles'
import type { ImageCardProps } from './ImageCard.types'
import type { FC } from 'react'
import ImageDescription from '../../Atoms/ImageDescription'
import Image from '../../Atoms/Image'
import { Context } from '../../../utils/context'

const ImageCard: FC<ImageCardProps> = ({ image, description }) => {
  const [imageHeight, setImageHeight] = useState(0)
  const [context] = useContext(Context)
  const ref = useRef<HTMLDivElement>(null)
  const handleImageCardHeight = (imageHeight: number): number => {
    const imageDescriptionHeight = 120

    return imageHeight + imageDescriptionHeight
  }
  useEffect(() => {
    setImageHeight(
      handleImageCardHeight(ref ? (ref.current ? Number(ref.current.children[0].getAttribute('data-height')) : 0) : 0)
    )
  }, [imageHeight, context])

  return (
    <StyledImageCardWrapper
      cardHeight={handleImageCardHeight(
        ref ? (ref.current ? Number(ref.current.children[0].getAttribute('data-height')) : 0) : 0
      )}
      cardWidth={ref ? (ref.current ? Number(ref.current.children[0].getAttribute('data-width')) : 0) : 0}
      ref={ref}
    >
      <Image src={image?.src} altText={image?.altText} />
      <ImageDescription text={description?.text} />
    </StyledImageCardWrapper>
  )
}

export default ImageCard
