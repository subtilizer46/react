import styled from 'styled-components';
import theme from './theme';

const Button = styled.button`
  background-color: ${theme.primaryColor};
  color: white;
  padding: 10px 20px;
  font-family: ${theme.fontFamily};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.secondaryColor};
  }
`;

export default Button;