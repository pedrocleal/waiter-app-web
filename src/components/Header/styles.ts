import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 200px;
  height: 100%;
  width: 100%;
  padding: 0 120px;

  background-color: #D73035;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #fff;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }

  @media (max-width: 780px) {
    padding: 24px;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }

    img {
      width: 300px;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
    }

    img {
      width: 200px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
