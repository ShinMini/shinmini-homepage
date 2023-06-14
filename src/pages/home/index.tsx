import Greeting from './components/Greeting';
import Comment from '@src/components/Comment';
import { Layout } from '@src/components';

export default function Home() {
  return (
    <Layout>
      <Greeting />
      <Comment />
    </Layout>
  );
}
