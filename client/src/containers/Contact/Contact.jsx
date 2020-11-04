import React from "react";
import IconLink from "../../components/IconLink/IconLink";
import "./Contact.css";
import { Modal, Button } from "react-materialize";

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
      alt: "Resume",
    },
    {
      link: "mailto:josephperry720@gmail.com",
      image: "./img/email-logo.png",
      alt: "Email",
    },
  ];

  return (
    <div className="container">
      <div className="container">
        <div className="row" id="contacts">
          {contacts.map((contact) => (
            <IconLink {...contact} />
          ))}
          <div className="col s12 m3">
          <h5 className="logo-name">Phone</h5>
            <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">
                  Close
                </Button>,
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header="Cell Number"
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
            trigger={<img className="icon-logo" src="./img/phone-logo.png" alt="phone" />}
            >
              <p>
                (404) 358-3607
              </p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
