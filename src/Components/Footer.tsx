/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { InstagramOutlined, LinkOutlined } from "@ant-design/icons";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div
      className={classes.container}
      style={{
        display: "flex",
        position: "fixed",
        bottom: 0,
        width: "100%",
        justifyContent: "space-around",
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        style={{ cursor: "pointer", marginLeft: 10, marginRight: 5 }}
        onClick={() => {
          window.open("https://www.sarbzone.com", "_blank");
        }}
      >
        Developed by{" "}
        <span>
          <LinkOutlined /> SarbZone
        </span>
      </div>

      <div
        style={{ marginRight: 10, cursor: "pointer" }}
        onClick={() => {
          window.open("https://www.instagram.com/sarbzone", "_blank");
        }}
      >
        <InstagramOutlined /> Follow on Instagram
      </div>
    </div>
  );
};
export default Footer;
