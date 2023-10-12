import { Layout } from '@src/components';
import { styled } from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-snap-align: center;
  scroll-margin-top: 10rem;

  & > h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #e0234e;
  }
`;

const FindMy = () => {
  return (
    <Layout>
      <Section id="id">
        <h1 className="">ID</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, cum! Et hic laudantium iste ipsum repellat
          nemo laboriosam voluptatibus. Ipsa accusantium inventore necessitatibus quod. Delectus pariatur voluptatum
          ullam aut necessitatibus!
        </p>
      </Section>
      <Section id="pwd">
        <h1 className="text-teal-400">Password</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, cum! Et hic laudantium iste ipsum repellat
          nemo laboriosam voluptatibus. Ipsa accusantium inventore necessitatibus quod. Delectus pariatur voluptatum
          ullam aut necessitatibus!
        </p>
      </Section>
    </Layout>
  );
};

export default FindMy;
