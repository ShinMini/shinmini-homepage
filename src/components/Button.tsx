import styled from 'styled-components';

const Button = styled.button<{ color?: string }>`
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-weight: 600;

  padding: clamp(0.5rem, 3vw, 1rem) clamp(1rem, 4vw, 2rem);

  border-top: 0px;
  border-right: 0px;
  border-width: 2px;

  border-radius: 15px;
  border-color: ${props => props.theme.colors.shadowDark};

  color: ${props => props.theme.colors.grayDarkest};
  background-color: ${props => props.color || props.theme.colors.button};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.warning};
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 4px 2px inset;
  }
`;

export default Button;
