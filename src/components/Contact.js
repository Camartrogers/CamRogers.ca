import { useState } from "react";

function Contact() {
  const [copy, setCopy] = useState("Copy Email");

  return (
    <section id="contact">
      <h2>
        <span className="tag">&lt;h2&gt;</span>Contact Me!
        <span className="tag">&lt;/h2&gt;</span>
      </h2>
      <p>
        <span className="tag">&lt;p&gt;</span>
        If you have enjoyed reading about and reviewing my work and you would
        like to contact me, then please reach out to me by email:
        <span className="tag">&lt;/p&gt;</span>
        <p>
          <span className="tag">&lt;p&gt;</span>
          camartrogers@gmail
          <span className="tag">&lt;/p&gt;</span>
        </p>
        <button
          className="btn"
          onClick={() => {
            navigator.clipboard.writeText("camartrogers@gmail.com");
            let newCopy = "Copied!";
            setCopy(newCopy);
          }}
        >
          {copy}
        </button>
      </p>
    </section>
  );
}

export default Contact;
