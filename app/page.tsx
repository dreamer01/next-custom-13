import Link from 'next/link';
import Styles from './page.module.css';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/hello');
  if (response.ok) {
    // throw new Error('Is Error Boundary Present');
    return response.json();
  } else throw new Error('Something went wrong!');
};

export default async function Home() {
  const data = await getData();
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <h1 className={Styles.title}>
          Welcome to {data.name}{' '}
          <a href='https://nextjs.org' target='_blank'>
            Next.js 13!
          </a>
        </h1>
      </main>
      <Link href='/a'> Page A </Link>
      <Link href='/b'> Page B </Link>
    </div>
  );
}
