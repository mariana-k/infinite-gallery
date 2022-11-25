/* eslint-disable no-undef */
import { useEffect, useCallback, useRef, useContext } from 'react'
import { createApi } from 'unsplash-js'
import { Context } from '../context'

export const useFetch = (data, dispatch) => {
  const [context, setContext] = useContext(Context)

  useEffect(() => {
    dispatch({ type: 'FETCHING_IMAGES', fetching: true })

    const unsplash = createApi({
      accessKey: 'QHnHU5WIGkD8Q17EUYic0KVrKtA_Wpx7EApKQ7I3FXA',
    })

    if (context.isNew) {
      dispatch({ type: 'RESET_IMAGES', images: [] })
      setContext({ ...context, isNew: false })
    }

    unsplash.search
      .getPhotos({
        query: context.newValue,
        page: data.page,
        perPage: 10,
      })
      .then((result) => {
        if (result.errors) {
          dispatch({ type: 'FETCHING_IMAGES', fetching: false })
        } else {
          const feed = result.response
          const { results } = feed
          dispatch({ type: 'STACK_IMAGES', results })
        }
        dispatch({ type: 'FETCHING_IMAGES', fetching: false })
      })
  }, [dispatch, data.page, context.newValue])
}

export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCE_PAGE' })
          }
        })
      }).observe(node)
    },
    [dispatch]
  )

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current)
    }
  }, [scrollObserver, scrollRef])
}

export const useLazyLoading = (imgSelector, items) => {
  const imgObserver = useCallback((node) => {
    const intObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          const currentImg = en.target
          const newImgSrc = currentImg.dataset.src
          currentImg.src = newImgSrc
          intObs.unobserve(node)
        }
      })
    })
    intObs.observe(node)
  }, [])

  const imagesRef = useRef(null)

  useEffect(() => {
    imagesRef.current = document.querySelectorAll(imgSelector)

    if (imagesRef.current) {
      imagesRef.current.forEach((img) => imgObserver(img))
    }
  }, [imgObserver, imagesRef, imgSelector, items])
}
