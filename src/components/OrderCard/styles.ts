import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 130px;
  width: 100%;
  padding: 16px;
  border: 1px solid #CCCCCC40;
  background-color: #FFFFFF;
  border-radius: 8px;

  h1 {
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }

  span {
    font-size: 14px;
  }
`;
