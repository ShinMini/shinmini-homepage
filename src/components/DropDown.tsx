import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.oppositeText};
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 98%;
  margin: auto;

  border-radius: 0.5rem;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};

  box-sizing: border-box;
  padding: 0.5rem;

  box-shadow: 5px 2px 0.5rem 0.5rem rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;

    align-items: center;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};

    border-radius: 0.5rem;

    padding: 0.5rem 1rem;

    gap: 2rem;
  }
`;

const RightButtonBox = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

const DropDownButton = styled.button`
  padding: 0.3rem 0.4rem;
  font-size: 1rem;
  font-weight: bold;

  color: ${props => props.theme.colors.oppositeText};
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
  width: 98%;
  height: ${props => (props.isOpen ? 'auto' : '0')};

  transition: all 200ms ease-in-out;
  transform: ${props => (props.isOpen ? 'scaleY(1)' : 'scaleY(0) rotateX(90deg)')};

  box-sizing: border-box;

  word-wrap: break-word;

  margin: 0.5rem auto;

  padding: ${props => (props.isOpen ? '1rem' : '0')};

  border-radius: 0.5rem;

  color: ${props => props.theme.colors.oppositeText};
  background-color: ${props => props.theme.colors.oppositeBackground};

  box-shadow: 5px 2px 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
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
        <div className="min-w-[60%]">
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
