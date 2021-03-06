import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes, faWhatsappSquare } from "@fortawesome/free-solid-svg-icons";

function NewTabLink({ href, children }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}

function AboutPage() {
  return (
    <div className="container p-4 about-page">
      <h4 className="text-uppercase mb-1">About</h4>
      <p className="text-black-60">
        Map19 is a crowd-sourced app that helps you track the latest
        information on essential services operating around you during the
        Covid-19 shutdowns. <Link to="//location">Add an update</Link> about a
        store near you and help others!
      </p>
      <p className="text-black-60">
        Made By ☕ Gourab
      </p>
      <h4 className="mt-4 text-uppercase mb-1">Contribute</h4>
      <p className="text-black-60">
        We are looking for volunteers that can help with technology and
        outreach.
      </p>
      <p>
        <NewTabLink href="#">
          <Button variant="info">
            <i className="fab fa-whatsapp" /> Join us
          </Button>
        </NewTabLink>
      </p>
      
      <h4 className="mt-4 text-uppercase mb-1">Privacy Policy</h4>
      <p className="text-black-60">
        We collect your IP address when you update information on a store. This
        helps us identify the authenticity of the submission. No other personal
        information is collected.
      </p>
      <p>
        <NewTabLink href="mailto:gourab@creticweb.tech">
          <Button variant="info">
            <i className="fal fa-envelope" /> Reach out by email
          </Button>
        </NewTabLink>
      </p>
      
    </div>
  );
}

export default AboutPage;
