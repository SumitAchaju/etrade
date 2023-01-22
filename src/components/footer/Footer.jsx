import React from "react";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import "./scss/Footer.style.scss";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <>
      <footer className="mt-5 pt-4">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </footer>
    </>
  );
}
