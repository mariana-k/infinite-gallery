import styled from 'styled-components';
import { width, radius } from '../../../styles/global';

export const StyledImageWrapper = styled.div`
  width: ${width.imageCard};
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: ${radius.regular};
`;