import { hexToRGBA } from '@src/features';
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};

  width: 99%;

  box-sizing: border-box;
  padding: 0.6rem 0.5rem;

  border-radius: 0.5rem;
  box-shadow: 2px 2px 0.2rem 0.2rem ${props => hexToRGBA(props.theme.colors.primary, 0.3)};
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;

    align-items: center;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};

    border-radius: 0.5rem;

    padding: 0.6rem 1.2rem;
  }
`;

const RightButtonBox = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const DropDownButton = styled.button`
  padding: 0.3rem 0.4rem;
  font-size: 1rem;
  font-weight: bold;

  color: ${props => props.theme.colors.opposite.text};
  background-color: ${props => props.theme.colors.yellow};

  border-radius: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  font-style: italic;

  color: ${props => props.theme.colors.info};
`;

const Content = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${props => (props.isOpen ? 'auto' : '0')};

  transition: height 150ms linear, transform 200ms linear, opacity 10ms linear;

  transform: ${props => (props.isOpen ? 'scaleY(1) translateY(0.2em)' : 'scaleY(0) rotateX(90deg) translateY(0px)')};
  opacity: ${props => (props.isOpen ? '1' : '0')};

  box-sizing: border-box;

  word-wrap: break-word;

  margin: auto;

  padding: ${props => (props.isOpen ? '1rem 1.2rem' : '0')};

  border-radius: 0.5rem;

  color: ${props => props.theme.colors.opposite.text};
  background-color: ${props => props.theme.colors.opposite.background};

  box-shadow: inset -1px 1px 0 0.1rem rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: normal;
`;

type DropDownProps = {
  title: string;
  createdDate: string;
  diffDate: string | number;
  detail?: string;

  editTodo?: () => void;
  deleteTodo?: () => void;
};

const DropDown: React.FC<DropDownProps> = ({ title, createdDate, diffDate, detail, editTodo, deleteTodo }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Header>
        <div className="min-w-[60%] flex justify-between">
          <Title>{title}</Title>
          <SubTitle>
            {createdDate} - {diffDate} minutes ago
          </SubTitle>
        </div>
        <RightButtonBox>
          <button className="text-blue-500 hover:text-blue-600" onClick={editTodo}>
            Edit
          </button>
          <button className="text-red-500 hover:text-red-600" onClick={deleteTodo}>
            Delete
          </button>
          <DropDownButton onClick={handleDropDown}>Details</DropDownButton>
        </RightButtonBox>
      </Header>
      <Content isOpen={isOpen}>
        <Description>{detail}</Description>
      </Content>
    </Container>
  );
};

export default React.memo(DropDown);
