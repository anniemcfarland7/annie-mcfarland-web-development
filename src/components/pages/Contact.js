import React from "react";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <main>
      <div className="card-group">
        <div className="mb-3 mt-5 mx-auto" style={{ maxWidth: "90%" }}>
          <div className="row">
            <div className="col mb-5">
              <div className="card">
                <div className="card-body contactMe">
                  <h1 className="card-title">Contact Me</h1>
                  <p>
                    Cell:{" "}
                    <a href="tel:+13144201527">
                      314-420-1527
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:anniemcfarland7@gmail.com"
                    >
                      anniemcfarland7@gmail.com
                    </a>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/in/anniemcfarland/"
                    >
                      https://www.linkedin.com/in/anniemcfarland/
                    </a>
                  </p>
                  <p>
                    GitHub:{" "}
                    <a
                      href="https://github.com/anniemcfarland7"
                    >
                      https://github.com/anniemcfarland7
                    </a>
                  </p>
                  <p className="card-text">
                    Download My Resume: &nbsp;
                    <a
                      href="../../imgs/ANNIE_MCFARLAND_RESUME_2021.PDF" download="ANNIE_MCFARLAND_RESUME_2021"
                    >
                      <FontAwesomeIcon className="fas" icon={faFilePdf} />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body contactMe">
                  <h1 className="card-title">E-mail Me</h1>
                  <form
                    id="emailForm"
                    action="https://getform.io/f/cafec8fa-ede4-41fd-b961-202b2bf5298d"
                    method="POST"
                  >
                    <div className="mb-3">
                      <label for="name" className="form-label">
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Full Name"
                        name="name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        E-mail Address:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="youremail@email.com"
                        name="email"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Message:
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-sm send-email-button"
                      style={{ backgroundColor: "#3485a0" }}
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Contact;
