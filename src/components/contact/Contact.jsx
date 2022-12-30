// import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/me.png" alt="" />
      </div>
      <div className="right">
        <h2>Resume</h2><br></br>
        <object data="./assets/raul_higareda_resume.pdf" type="application/pdf" width="100%" height="80%">
      <p>A link <a href="./assets/raul_higareda_resume.pdf">to the PDF!</a></p>
  </object>
      </div>
      {/* <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" email="Email" />
          <textarea message="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div> */}
    </div>
  );
}