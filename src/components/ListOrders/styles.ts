import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  max-width: 80vw;
  width: 100%;
  margin: 52px auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
