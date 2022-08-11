import "./topbar.scss";
import { Person, Mail, LinkedIn, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Raul Higareda
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto: raul.d.higareda@gmail.com">Email</a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/raul-higareda-b8723b1a7/">linkedin.com/in/raul-higareda-b8723b1a7/</a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://www.github.com/raulington">github.com/raulington</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
