import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  position: relative;

  img {
    width: 425px;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    margin: 2px;
    width: 20%;
    opacity: 0.7;
    margin-top: 25px;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img {
          opacity: unset;
        }

        button {
          opacity: unset;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top:20px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const Label = styled.span`
  width: 10%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 90%;
`;
