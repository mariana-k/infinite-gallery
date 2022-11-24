import { ImageCardWrapper } from './ImageCard.styles'
import type { ImageCardProps } from './ImageCard.types';
import type { FC } from 'react';
import ImageDescription from '../../Atoms/ImageDescription';
import Image from '../../Atoms/Image'

const ImageCard: FC<ImageCardProps> = ({
  image, description
}) => {
  return (
    <ImageCardWrapper>
      <Image src={image?.src} altText={image?.altText} />
      <ImageDescription text={description?.text} />
    </ImageCardWrapper>
  )
};

export default ImageCard;
