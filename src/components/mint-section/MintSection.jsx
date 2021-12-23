import React from "react";
import App from "../../App";
import MutantTest from "../../assets/images/mutant_test.png";
import Logo from "../../assets/images/logo.png";

export default function MintSection(props) {
  return (
    <div className="container content">
      <img src={Logo} alt="" className="logo" />
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 connect-wallet">
          <h1>
            WELCOME TO <br />
            COSMIC MUTANTS
          </h1>
          <p>Minting offer: 3 SOL</p>
          <App />
          {/* <p style={{ marginTop: "10px" }}>Please Connect Wallet to Mint</p>s */}
        </div>
        <div className="col-md-6">
          <img src={MutantTest} alt="" className="img-gif" />
        </div>
      </div>
    </div>
  );
}
