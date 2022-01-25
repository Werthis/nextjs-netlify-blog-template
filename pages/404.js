import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ojej, ta strona nie istnieje...</h1>
      <p>
        Wróć do{" "}
        <Link href="/">
          <a> strony głównej</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
