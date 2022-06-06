import styled, { css } from 'styled-components';

export const FullCardImageWrapper = styled.div``;

export const FullCardContentWrapper = styled.div``;

export const FullCardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PreviewCardWrapper = styled.div``;

export const PreviewCardContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 200px) {
    justify-content: start;
    flex-direction: column;
  }
`;
