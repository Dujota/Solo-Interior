import styled from 'styled-components';

export const EmptyCoverImage = styled.div`
  padding-top: 50%;
  background-color: #ddd;
`;

export const SliderImageContainer = styled.div`
  height: 600px;
  margin: 10px;

  @media only screen and (min-width: 1575px) {
    height: 700px;
  }

  @media only screen and (max-width: 1024px) {
    height: 400px;
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
  }

  @media only screen and (max-width: 600px) {
    height: 400px;
    margin: 0px;
  }

  @media only screen and (max-width: 480px) {
    height: 300px;
    margin: 0px;
  }
`;
