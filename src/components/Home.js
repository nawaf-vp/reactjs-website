import React from "react";
import "../styles/Home.css";

import accomodation from "../images/accomodation.jpg";
import weddings from "../images/weddings.jpg";

const Home = () => {
  return (
    <div id="home" className="container ">
      {/* <p className="text-left">Home</p> */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>

      {/* rows start here */}
      <div className="row">
        <div className="col">
          <div className="card bg-dark text-white">
            <img src={accomodation} className="card-img img-fluid" alt="..." />
            <div className="card-img-overlay ">
              <h5 className="card-title text-center align-middle">
                ACCOMODATION
              </h5>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-dark text-white">
            <img src={weddings} className="card-img img-fluid" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">WEDDINGS</h5>
            </div>
          </div>
        </div>
      </div>

      {/* row start here */}
      <div className="row mt-5">
        <div className="col">
          <div className="card bg-dark text-white">
            <img
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAAAA1BMVEX/ZgAqRcUWAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII="
              }
              className="card-img img-fluid"
              alt="..."
            />
            <div className="card-img-overlay ">
              <h5 className="card-title align-middle">Card title</h5>
              {/* <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> */}
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-dark text-white">
            <img
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAAAA1BMVEX/ZgAqRcUWAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII="
              }
              className="card-img img-fluid"
              alt="..."
            />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
