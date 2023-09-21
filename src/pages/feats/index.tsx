import { Layout } from '@src/components';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  li {
    font-weight: 600;
    background-color: ${props => props.theme.colors.background};
    min-width: 30%;
    width: 100%;
    max-width: 40rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};

      &::before {
        content: '👉';
        margin-right: 0.5rem;
      }
    }
  }
`;

const Feats = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <FeatureList>
        <li onClick={() => navigate('image-resizer')}>Image Resizer</li>
        <li onClick={() => navigate('todo')}>Todo</li>
        <li onClick={() => navigate('lab')}>Lab</li>
      </FeatureList>
    </Layout>
  );
};

export default Feats;
