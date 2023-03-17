import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #CCCCCC40;
  background-color: #fafafa;
  border-radius: 8px;

  width: 100%;
  padding: 16px;

  h2 {
    margin-bottom: 24px;
  }
`;

export const ListOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
`;
