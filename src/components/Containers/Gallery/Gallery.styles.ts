import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-auto-rows: minmax(20px, auto);
  justify-content: center;
`;