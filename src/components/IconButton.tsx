import React from 'react';
import styled from 'styled-components';

const IButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;

  border: none;
  border-radius: 50%;
  padding: 0.5rem;

  backdrop-filter: blur(10px);

  cursor: pointer;
`;

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return <IButton onClick={onClick}>{icon}</IButton>;
};

export default IconButton;
