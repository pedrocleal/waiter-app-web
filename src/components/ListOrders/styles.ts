import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  max-width: 80vw;
  width: 100%;
  margin: 52px auto;

  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
