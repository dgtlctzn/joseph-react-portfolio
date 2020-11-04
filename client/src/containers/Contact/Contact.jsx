import React from "react";
import IconLink from "../../components/IconLink/IconLink";

const Contact = () => {
  const contacts = [
    {
      link: "https://github.com/dgtlctzn",
      image: "./img/github-logo.png",
      alt: "GitHub",
    },
    {
      link: "./Coding-Resume-JRP.pdf",
      image: "./img/resume-logo.png",
      alt: "resume",
    },
    {
      link: "mailto:josephperry720@gmail.com",
      image: "./img/email-logo.png",
      alt: "email",
    },
  ];

  return (
    <div className="container">
      <div id="contacts" className="container">
        <div className="row">
          {contacts.map((contact) => (
            <IconLink {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
