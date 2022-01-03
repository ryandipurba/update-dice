import React from "react";
import App from "../../App";
import "./style.css";
import Logo from "../../assets/image/logo.png";
import Footer from "../Footer/Index";

export default function Mint() {
  return (
    <div className="container">
      <div
        className="row align-items-center p-3"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-12  align-tem-center">
          <img src={Logo} alt="" className="logo" />
          <div className="mint text-center">
            <div style={{ margin: "50px 0" }}>
              <h3>
                75% of all fees collected from the games will go holders of this
                collection in the form of daily passive income. Degens Only.
              </h3>
              <h3 className="mt-4">Price 0.77 SOL</h3>
              <App />
              <p className="mt-4">Please connect wallet to be able to mint</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
