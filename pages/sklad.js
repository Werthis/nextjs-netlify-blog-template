import Head from "next/head";
import siteMetadata from "/data/siteMetadata";

const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Kontakt | {siteMetadata.title}</title>
      </Head>
      <div>
        <h1>Kontakt</h1>
        <h3>CHÓR AKADEMICKI Uniwersytetu Mikołaja Kopernika</h3>
        <h3>ul. Gagarina 11, 87-100 Toruń</h3>
        <h4>strona: www.chor.umk.pl</h4>
        <h4>e-mail: chor@umk.pl</h4>
        <h4>Próby:</h4>
        <p>Gdzie? ---- AULA UMK (wejście główne)</p>{" "}
        <p>
          {" "}
          Kiedy? ---- wtorek: 18:30–21:00 czwartek: 19:oo–21:15 — próby wspólne
        </p>{" "}
        <p> Przesłuchania: zawsze przed próbą - 18.3o</p>
      </div>
    </>
  );
};

export default Kontakt;
