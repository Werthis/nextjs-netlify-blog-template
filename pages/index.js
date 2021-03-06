import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Werthis | Home</title>
        <meta name="keywords" content="werthis" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quidem,
          hic soluta minima asperiores similique architecto dignissimos
          corrupti. Maiores ratione sit inventore et eveniet molestiae, fuga
          culpa sed suscipit beatae?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quidem,
          hic soluta minima asperiores similique architecto dignissimos
          corrupti. Maiores ratione sit inventore et eveniet molestiae, fuga
          culpa sed suscipit beatae?
        </p>
        <Link href="/werthis">
          <a className={styles.btn}>Look into Werthis List</a>
        </Link>
      </div>
    </>
  );
}
