import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border: 1px solid #6c757d;
  border-radius: 24px;
  color: #6c757d;
  background-color: transparent;
  font: inherit;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    transition: all 0.2s ease-in-out;
  }
`;

export default Button;
