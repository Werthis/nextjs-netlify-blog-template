import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";
import styles from "../styles/Aktualnosci.module.css";
import YouTube from "react-youtube";

const Aktualnosci = () => {
  // youtube https://www.youtube.com/watch?v=tZuSeRsPS7g
  return (
    <>
      <Head>
        <title>Aktualności | {siteMetadata.title}</title>
      </Head>
      <div>
        <h1
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          Aktualności
        </h1>
        <h3>Chór Akademicki UMK w Toruniu istnieje już 40 lat.</h3>
        {/* <div>
          <Image
            src={"/40lecie.png"}
            alt="40lecie"
            className={styles.image40}
            width={194}
            height={279}
            // // layout="fill"
            // objectFit="cover"
          />
        </div> */}
      </div>
    </>
  );
};

export default Aktualnosci;
