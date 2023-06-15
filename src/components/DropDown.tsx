import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 1rem;

  color: ${props => props.theme.colors.oppositeText};
  background-color: ${props => props.theme.colors.oppositeBackground};

  padding: 2rem 0.5rem;

  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 95%;

  border-radius: 0.5rem;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};

  box-sizing: border-box;
  padding: 1rem;

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

const DropDownButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;

  color: ${props => props.theme.colors.oppositeText};
  background-color: ${props => props.theme.colors.oppositeBackground};

  border-radius: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;

  color: ${props => props.theme.colors.gray};
`;

const Content = styled.div<{ isOpen: boolean }>`
  width: 95%;
  height: ${props => (props.isOpen ? 'auto' : '0')};

  transition: all 300ms ease-in-out;
  transform: ${props => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};

  box-sizing: border-box;

  margin: auto;
  padding: 1rem;

  border-radius: 1.5rem;

  color: ${props => props.theme.colors.oppositeText};
  background-color: ${props => props.theme.colors.oppositeBackground};

  box-shadow: 5px 2px 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: normal;
`;

const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Header>
        <div>
          <Title>Title</Title>
          <SubTitle>SubTitle</SubTitle>
        </div>
        <DropDownButton onClick={handleDropDown}>Details</DropDownButton>
      </Header>
      <Content isOpen={isOpen}>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ea soluta voluptate deleniti enim ullam
          rem ad consequatur vel iure voluptatum aliquid numquam est possimus nemo laudantium! Soluta, iste sint?
          Temporibus similique, sint esse, sequi ullam dolores quis et facilis atque qui, ipsam vero rem doloremque
          asperiores ad. Sequi earum facere voluptatibus nihil quo nobis qui exercitationem. Ratione, cupiditate
          consequuntur. Pariatur nulla culpa odio necessitatibus. A dolorum, illo officia itaque qui error minus vitae
          repudiandae ipsa unde dicta veniam aliquid assumenda eius quidem id, perspiciatis corporis, vel sed odit!
          Culpa. Amet quo fugiat minus. Adipisci commodi iste laudantium voluptates veritatis corporis odio velit saepe
          sit quo ad, beatae accusantium harum nisi. Illo expedita repellat at quis error hic architecto aspernatur?
          Iure fugiat autem, maiores officiis libero esse excepturi odit molestias ratione enim consequuntur quas,
          voluptatem possimus sapiente earum assumenda necessitatibus, et nisi optio aliquam hic voluptate
          exercitationem! Cum, consectetur inventore. Rerum, officia magnam architecto, debitis omnis praesentium vero,
          distinctio exercitationem optio non molestiae. Ut, incidunt ex sapiente quasi laudantium voluptate quo,
          soluta, totam obcaecati ducimus ratione ea quas deserunt eius. Maiores, consequatur minus itaque corrupti
          velit, et nostrum excepturi fugit quia officia, architecto ipsum dolores accusantium perspiciatis unde dolor
          illo pariatur nesciunt enim asperiores? Ullam blanditiis corporis labore? Ut, necessitatibus. Numquam pariatur
          distinctio illo possimus. Fuga dolore doloremque hic temporibus! Ipsam explicabo tenetur eligendi accusamus
          quasi. Eveniet iure sequi adipisci magni ipsum at vel possimus repellendus perspiciatis? Quaerat, perspiciatis
          doloremque. Provident quibusdam reprehenderit ab, qui aspernatur itaque, ipsam ducimus quis dolores totam illo
          unde sapiente repellat officiis molestiae laudantium sequi impedit obcaecati assumenda harum. Esse accusamus
          officia distinctio placeat voluptate. Accusamus laboriosam necessitatibus voluptatum, quos provident quis
          earum ut ratione dicta molestiae ad accusantium dolores harum delectus incidunt perferendis omnis alias autem
          nulla enim! Iusto velit nam asperiores. Fugit, aliquid! Quaerat voluptatem amet quae incidunt repellat fuga
          corrupti omnis nesciunt hic? Dolorem vel quisquam at dignissimos earum, nulla deserunt laborum consequuntur
          quibusdam id molestias amet, nisi blanditiis, laboriosam doloremque! Praesentium. Culpa officiis aliquid,
          quae, placeat debitis neque dolor nulla ad repellat, fuga eum excepturi iusto nostrum. Nulla ratione, Quos
          corporis neque, voluptas maiores expedita architecto iusto repellat atque ea error aliquam laborum nam
          distinctio ullam vel soluta animi! Aliquam aut dolores magnam sed eum accusantium corrupti doloribus
          obcaecati. Quaerat nisi consectetur rerum atque tempore quae veritatis placeat illo eaque nesciunt veniam
          dolores voluptates deserunt illum consequuntur, vero, autem dolorem repudiandae! Iste ipsum est quas earum
          ducimus voluptas autem. Sapiente, nobis. Obcaecati impedit, eos itaque assumenda nulla fuga quisquam
          recusandae nihil atque voluptate velit ratione saepe blanditiis quas in dolore illo iusto soluta voluptatum
          labore ducimus eaque doloribus! Id. Culpa debitis corporis, aliquam odit sunt saepe distinctio sed nisi, esse
          doloribus consequuntur architecto quasi adipisci eaque neque excepturi. Ut nemo quibusdam laudantium adipisci
          corrupti, similique quidem distinctio a natus? Tempora, ipsam adipisci. Deserunt nihil et numquam
          reprehenderit, natus ab. Odit unde modi veniam officia autem, quibusdam perferendis, architecto itaque, magnam
          repellendus dolor magni inventore voluptates? Id omnis fuga quis? Totam iste repellat, corrupti quia cumque
          suscipit?
        </Description>
      </Content>
    </Container>
  );
};

export default DropDown;
