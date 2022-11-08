import Link from 'next/link';

import Styles from '../page.module.css';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/b');
  if (response.ok) {
    // throw new Error('Is Error Boundary Present');
    return response.json();
  } else throw new Error('Something went wrong!');
};

export default async function PageB() {
  const data = await getData();
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <h1 className={Styles.title}>Page B - {data.name}</h1>
      </main>
      <Link href='/a'>To Page A</Link>
    </div>
  );
}
