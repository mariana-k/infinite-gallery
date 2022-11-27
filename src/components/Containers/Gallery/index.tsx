import { useReducer, useRef, useContext } from 'react'
import { ImgState, ImgAction, PageState, PageAction, Img } from './Gallery.types'
import { StyledGalleryWrapper } from './Gallery.styles'
import { useFetch, useInfiniteScroll, useLazyLoading } from '../../../utils/hooks/customHooks'
import Search from '../../Molecules/Search'
import ImageCard from '../../Molecules/ImageCard'
import { Context } from '../../../utils/context'

const Gallery = () => {
  const [context] = useContext(Context)

  const imgReducer = (state: ImgState, action: ImgAction): ImgState => {
    switch (action.type) {
      case 'RESET_IMAGES':
        return {
          ...state,
          images: [],
        }
      case 'STACK_IMAGES':
        return {
          ...state,
          images: state.images.concat(action.results),
        }
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching }
      default:
        return state
    }
  }

  const pageReducer = (state: PageState, action: PageAction) => {
    switch (action.type) {
      case 'ADVANCE_PAGE':
        return { ...state, page: state.page + 1 }
      default:
        return state
    }
  }
  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
  const [imgData, imgDispatch] = useReducer(imgReducer, {
    images: [],
    fetching: true,
  })
  const bottomBoundaryRef = useRef(null)

  useFetch({ ...pager, query: context.newValue }, imgDispatch)
  useLazyLoading('.card-img-top', imgData.images)
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch)

  return (
    <>
      <Search />
      <StyledGalleryWrapper className="mm-masonry" id="mm-masonry">
        {imgData.images.map((image: Img, index: number) => {
          const { description, urls, id } = image

          return (
            <ImageCard
              key={`${index}-${id}`}
              image={{ src: urls.small, altText: description }}
              description={{ text: description }}
            />
          )
        })}
      </StyledGalleryWrapper>
      <div ref={bottomBoundaryRef}></div>
    </>
  )
}

export default Gallery
