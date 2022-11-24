import { useReducer, useRef } from 'react';
import { ImgState, ImgAction, PageState, PageAction, Img } from './Gallery.types';
import { GalleryWrapper } from './Gallery.styles';
import { useFetch, useInfiniteScroll, useLazyLoading } from "../../../utils/hooks/customHooks";
import ImageCard from '../../Molecules/ImageCard';

const Gallery = () => {
  const imgReducer = (state: ImgState, action: ImgAction): ImgState => {
    switch (action.type) {
      case "STACK_IMAGES":
        return { ...state, images: state.images.concat(action.results)  };
      case "FETCHING_IMAGES":
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  const pageReducer = (state: PageState, action: PageAction) => {
    console.log(state.page)
    switch (action.type) {
      case "ADVANCE_PAGE":
        return { ...state, page: state.page + 1 };
      default:
        return state;
    }
  };

  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 });
  const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, });
  let bottomBoundaryRef = useRef(null);

  useFetch(pager, imgDispatch);
  useLazyLoading(".card-img-top", imgData.images);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  return (
    <>
      <GalleryWrapper>
        {imgData.images.map((image: Img) => {
          const { description, urls, id } = image;

          return (
            <ImageCard key={id} image={{src: urls.full, altText: description}} description={{text: description}} />
          );
        })}
      </GalleryWrapper>
      <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
    </>
  );
}

export default Gallery;
