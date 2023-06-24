import Greeting from './components/Greeting';
import { Layout } from '@src/components';
import FrontEndSkills from './screens/FrontEndSkills';
import BackEndSkills from './screens/BackEndSkills';
import SendMail from './components/SendMail';

export default function Home() {
  return (
    <Layout>
      <Greeting />
      <FrontEndSkills />
      <BackEndSkills />
      <div id="contact-me" className="pb-10">
        <SendMail />
      </div>
    </Layout>
  );
}
