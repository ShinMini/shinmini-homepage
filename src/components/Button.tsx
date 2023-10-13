import styled from 'styled-components';

const Button = styled.button<{ color?: string }>`
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 600;

  padding: clamp(4px, 1vw, 12px) clamp(8px, 1vw, 12px);

  border-top: 0px;
  border-right: 0px;
  border-width: 2px;

  border-radius: 10px;
  border-color: ${props => props.theme.colors.shadowDark};

  color: #fff;
  background-color: ${props => props.color || props.theme.colors.button};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.warning};
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 4px 2px inset;
  }
`;

export default Button;
