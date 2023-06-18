import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem auto;
  padding: 2rem 0;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
`;

const Header = styled.header`
  display: flex;

  margin: 0;
  padding: 0.5rem 1rem;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};

  h1 {
    margin: 0;
    padding: 0;

    font-family: 'PoppinsMedium';
    font-size: 2.5rem;
    font-weight: 800;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: max(35rem, 60vh);

  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 2rem;

  gap: 0.5rem;

  background-color: ${props => props.theme.colors.opposite.gray};
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    height: max(50rem, 80vh);
  }
`;

const FEDesign = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 50rem;

  box-sizing: border-box;

  margin: auto;
  padding: 1rem;

  gap: 0.5rem;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.opposite.gray};

  h1 {
    margin-left: 0.5rem;
    padding: 0;

    font-family: 'PoppinsBold';
    font-size: 2.5rem;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 6fr;
    justify-content: space-around;
    align-items: baseline;
    width: 100%;
    max-width: 50rem;
    margin: auto;
    padding: 1rem;
    gap: 0.5rem;
    font-family: 'PoppinsMedium';

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    h2 {
      margin: 0 auto;
      padding: 0;

      font-size: 1.5rem;

      color: ${props => props.theme.colors.text};
      background-color: ${props => props.theme.colors.opposite.green};
      font-family: 'PoppinsBold';

      @media (max-width: 768px) {
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
        padding: 0.5rem;
      }
    }
    article {
      display: flex;
      flex-direction: column;

      gap: 0.5rem;

      width: 100%;
      h3 {
        margin: 0;
        padding: 0;

        font-size: 1.2rem;
        font-family: 'PoppinsSemiBold';
      }
      p {
        word-wrap: break-word;
        word-break: break-word;
      }
    }
  }
`;

const CodingSkills = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 50rem;

  box-sizing: border-box;

  margin: auto;
  padding: 1rem;

  gap: 0.5rem;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.opposite.gray};

  h1 {
    margin-left: 0.5rem;
    padding: 0;

    font-family: 'PoppinsBold';
    font-size: 2.5rem;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 6fr;
    justify-content: space-around;
    align-items: baseline;
    width: 100%;
    max-width: 50rem;
    margin: auto;
    padding: 1rem;
    gap: 0.5rem;
    font-family: 'PoppinsMedium';

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const FrontEnd: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Front-end</h1>
      </Header>
      <Content>
        <FEDesign>
          <h1>FE / Design</h1>
          <section>
            <h2>Icon</h2>
            <article>
              <h3>UI / UX Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima eius quisquam, reiciendis ea minus
                velit porro blanditiis impedit voluptatibus obcaecati, aspernatur totam perspiciatis saepe ut. Quas est
                necessitatibus numquam?
              </p>
            </article>
          </section>
        </FEDesign>
        <CodingSkills>
          <h1>Coding Skills</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illo maiores saepe possimus nesciunt temporibus
          provident veritatis reprehenderit corrupti! Voluptate laborum velit eligendi consectetur praesentium harum
          expedita veniam facere quasi!
        </CodingSkills>
      </Content>
    </Container>
  );
};

export default FrontEnd;
