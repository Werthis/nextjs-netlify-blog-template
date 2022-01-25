import styles from "../../styles/Werthis.module.css";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { werthis_list: data },
  };
};

const Werthis = ({ werthis_list }) => {
  return (
    <>
      <Head>
        <title>Werthis | Werthis folder</title>
        <meta name="keywords" content="werthis" />
      </Head>
      <div>
        <h1>Werthis folder</h1>
        {werthis_list.map((werthis) => (
          <Link href={`/werthis/${werthis.id}`} key={werthis.id}>
            <a className={styles.single}>
              <h3>{werthis.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Werthis;
