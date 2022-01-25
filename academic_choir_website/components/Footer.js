import siteMetadata from "/data/siteMetadata";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <SocialIcon
          className="socialIcon"
          url={siteMetadata.facebook}
          bgColor="#044ea4"
        />{" "}
        <SocialIcon
          className="socialIcon"
          url={siteMetadata.mail}
          network="email"
          bgColor="#044ea4"
        />
      </div>{" "}
      <div>
        {siteMetadata.author} {`© ${new Date().getFullYear()}`}{" "}
      </div>
    </footer>
  );
};

export default Footer;
