import { ImageCardProps } from '../../Molecules/ImageCard/ImageCard.types'

export type GalleryProps = {
  images?: ImageCardProps[]
}

export type ImgState = {
  images: Img[]
  fetching: boolean
}

export type Img = {
  id: string
  description: string
  urls: Urls
}

export type Urls = {
  small: string
}

export type ImgAction =
  | { type: 'FETCHING_IMAGES'; fetching: boolean }
  | { type: 'STACK_IMAGES'; results: Img[] }
  | { type: 'RESET_IMAGES'; results: Img[] }
  | { type: 'failure' }

export type PageState = {
  page: number
}

export type PageAction = { type: 'ADVANCE_PAGE' }
