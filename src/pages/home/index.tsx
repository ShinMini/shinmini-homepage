import FrontEnd from './components/FrontEnd';
import Greeting from './components/Greeting';
import { Layout } from '@src/components';

export default function Home() {
  return (
    <Layout>
      <Greeting />
      <FrontEnd />
    </Layout>
  );
}
