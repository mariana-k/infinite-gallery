/* eslint-disable no-undef */
import { useEffect, useCallback, useContext } from 'react'
import { createApi } from 'unsplash-js'
import { Context } from './context'

export const useFetch = (data, dispatch) => {
  const [context, setContext] = useContext(Context)

  useEffect(() => {
    dispatch({ type: 'FETCHING_IMAGES', fetching: true })

    const unsplash = createApi({
      accessKey: process.env.REACT_APP_US_ACCESS_KEY,
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
