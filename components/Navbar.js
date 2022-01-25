// import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <img src={"/indeks.png"} alt="logo" width={100} height={100} />
            {/* <Image src={"/indeks.png"} alt="logo" width={100} height={100} /> */}
          </a>
        </Link>
      </div>

      <Link href="/aktualnosci">
        <a className="link">AKTUALNOŚCI</a>
      </Link>
      <Link href="/kalendarium">
        <a className="link">KALNEDARIUM</a>
      </Link>
      <Link href="/historia">
        <a className="link">HISTORIA</a>
      </Link>
      <Link href="/repertuar">
        <a className="link">REPERTUAR</a>
      </Link>
      <Link href="/wladze">
        <a className="link">WŁADZE</a>
      </Link>
      <Link href="/sklad">
        <a className="link">SKŁAD</a>
      </Link>
      <Link href="/galeria">
        <a className="link">GALERIA</a>
      </Link>
      <Link href="/kontakt">
        <a className="link">KONTAKT</a>
      </Link>
    </nav>
  );
};

export default Navbar;
