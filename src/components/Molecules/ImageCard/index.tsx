import { useRef } from 'react'
import { ImageCardWrapper } from './ImageCard.styles'
import type { ImageCardProps } from './ImageCard.types'
import type { FC } from 'react'
import ImageDescription from '../../Atoms/ImageDescription'
import Image from '../../Atoms/Image'

const ImageCard: FC<ImageCardProps> = ({ image, description }) => {
  const ref = useRef<HTMLDivElement>(null)
  const handleImageCardHeight = (imageHeight: number): number => {
    const imageDescriptionHeight = 120

    return imageHeight + imageDescriptionHeight
  }

  return (
    <ImageCardWrapper className="mm-masonry__item" cardHeight={handleImageCardHeight(ref ? ref.current ? Number(ref.current.children[0].getAttribute('data-height')) : 0 : 0)}
    cardWidth={ref ? ref.current ? Number(ref.current.children[0].getAttribute('data-width')) : 0 : 0} ref={ref}>
      <Image src={image?.src} altText={image?.altText} />
      <ImageDescription text={description?.text} />
    </ImageCardWrapper>
  )
}

export default ImageCard
