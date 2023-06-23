import Greeting from './components/Greeting';
import { Layout } from '@src/components';
import FrontEndSkills from './screens/FrontEndSkills';

export default function Home() {
  return (
    <Layout>
      <Greeting />
      <FrontEndSkills />
    </Layout>
  );
}
