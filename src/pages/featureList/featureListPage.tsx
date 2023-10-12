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
    font-size: 1.2rem;
    font-weight: 600;
    background-color: ${props => props.theme.colors.background};
    min-width: 30%;
    width: 100%;
    margin-bottom: 1rem;
    padding: 1.5rem;
    border: 2px solid #ccc;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.warning};
      border-color: ${props => props.theme.colors.success};

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
        <li onClick={() => navigate('passport-resizer')}>여권 재조합기</li>
        <li onClick={() => navigate('memo')}>메모장</li>
        <li onClick={() => navigate('testing')}>Testing page</li>
      </FeatureList>
    </Layout>
  );
};

export default Feats;
