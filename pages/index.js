import siteMetadata from "/data/siteMetadata";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
      </Head>
      <div className={styles.text}>
        <Link href="/wstap">
          <a className="wstapButton"> WSTĄP DO CHÓRU </a>
        </Link>
      </div>
    </>
  );
}
