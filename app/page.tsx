import ButtonInPage from '@components/ButtonInPage';
import Card from '@components/Card';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title">Simple CURD App</h1>
      <p className="leading-loose">
        A simple CURD app built with Next.js, PocketBase and TypeScript.
      </p>
      <p className="leading-loose">
        一个简单的CURD应用程序，使用Next.js，PocketBase和TypeScript构建。
      </p>
      <Link href="/notes">
        <div className="mt-6">
          <ButtonInPage type="button">Try it out</ButtonInPage>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
