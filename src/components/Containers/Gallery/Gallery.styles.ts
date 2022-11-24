import styled from 'styled-components'

export const GalleryWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-auto-rows: minmax(1rem, auto);
  justify-content: center;
`
