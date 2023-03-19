import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(5px);
  align-items: center;

  z-index: 999;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  padding: 32px;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      background-color: transparent;
      border: 0;
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 24px;

  small {
    font-size: 14px;
    opacity: 0.8;
  }

  div {
    margin-top: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .item {
    display: flex;
    align-items: flex-start;

    & + .item {
      margin-top: 16px;
    }

    img {
      border-radius: 6px;
    }

    .quantity {
      font-size: 14px;
      color: #666;
      display: block;
      min-width: 20px;
      margin-left: 12px;
    }

    .product-details {
      margin-left: 4px;

      strong {
        display: block;
        margin-bottom: 4px;
      }

      span {
        font-size: 14px;
        color: #666;
      }
    }
  }
`;

export const OrderTotal = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }
`;

export const ModalActions = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  .primary {
    font-weight: 600;
    width: 100%;
    background-color: #333;
    border-radius: 48px;
    color: #fff;
    padding: 12px 24px;
  }

  .secondary {
    width: 100%;
    padding: 14px 24px;
    color: #d73035;
    font-weight: 600;
    border-radius: 48px;
    background: transparent;
    margin-top: 12px;
    border: none;
  }
`;
