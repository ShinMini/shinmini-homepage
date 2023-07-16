import Greeting from './screens/Greeting';
import { Layout } from '@src/components';
import SendMail from './screens/SendMail';
import TechSkills from './screens/techSkills';

export default function Home() {
  return (
    <Layout>
      <Greeting />
      <TechSkills />
      <SendMail />
      <br className="h-4" />
    </Layout>
  );
}
