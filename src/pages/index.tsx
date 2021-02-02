import 'twin.macro';

import Layout from '../components/Layout';
import Main from '../components/Main';
import Posts from '../components/Posts';

function Home() {
  return (
    <Layout>
      <Main />
      <Posts />
    </Layout>
  );
}

export default Home;
