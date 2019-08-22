import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="container fixed-bottom" id="footer">
      <div className="container float-left">
        <small className="text-newsletter">
          Newsletter: <input type="text" className="input-newsletter" />
        </small>
        <button type="button" className="ml-1 mt-0 btn btn-sm btn-outline-dark">
          Submit
        </button>

        <p className="float-right">
          <small className="author-text">
            by: Milos Rancic{" "}
            <a
              href="https://github.com/milosrancic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
