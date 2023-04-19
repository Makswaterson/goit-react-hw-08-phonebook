import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-left: auto;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #3f51b5;
  color: #fff;
  &:hover {
    background-color: #f44336;
  }
  &:focus {
    background-color: #f44336;
  }
  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Username = styled.p`
  font-weight: 700;
`;
