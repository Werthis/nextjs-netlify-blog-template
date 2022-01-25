import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";
import styles from "../styles/Wstap.module.css";

const Wstap = () => {
  // youtube https://www.youtube.com/watch?v=tZuSeRsPS7g
  return (
    <>
      <Head>
        <title>Wstąp do Chóru | {siteMetadata.title}</title>
      </Head>
      <div className={styles.mainH1Outside}>
        <h1 className={styles.mainH1}>PRZESŁUCHANIA</h1>
      </div>
      <div className={styles.text}>
        <h3>
          <b>Przesłuchania</b> odbywają się: <br /> <b>wtorek</b> i{" "}
          <b>czwartek</b> o <b>18:30</b> w <b>Auli UMK</b>{" "}
        </h3>
        <h3>
          Chór Akademicki jest w ofercie &quot;Zajęć ogólnouczelnianych&quot;{" "}
          <br /> za <b>3 punkty ECTS</b>. <br />
          (patrz - rejestracja w USOS)
        </h3>
        <h3>
          Na przesłuchaniu spotkasz się z dyrygentem. Możesz sprawdzić swój
          <br />
          <b>słuch muzyczny</b> oraz <b>barwę i skalę głosu</b>,<br /> niezbędne
          do zakwalifikowania (zasady wg. sylabusa). Wystarczy również
          zadzwonić: 603 693 546
        </h3>
        {/* <div className="image-40">
          <Image
            src={"/40lecie.png"}
            width={194}
            height={279}
            // layout="fill"
            objectFit="cover"
          />
        </div> */}
      </div>
    </>
  );
};

export default Wstap;
