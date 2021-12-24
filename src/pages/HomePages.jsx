import React from "react";
import Footer from "../components/footer/Footer";
import MintSection from "../components/mint-section/MintSection";
import Modal from "../components/Modal";
import Navbar from "../components/navbar/Navbar";

export default function HomePages() {
  return (
    <>
      <Modal />
      <Navbar />
      <MintSection />
      <Footer />
    </>
  );
}
