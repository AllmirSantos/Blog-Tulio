import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./styles.js";

export default function NavBar() {
  return (
    <Header>
      <div>
        <Link to="/">
          <img
            className="ImageLogo"
            alt=""
            src="/assets/images/LogoWhite.svg"
          />
        </Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">Sobre</Link>
        <Link to="contact">Contatos</Link>
      </div>
      <label className="ModeWhite" for="Mode">
        <div className="BoxTextMode BoxTextModeWhite">
          <p> Apaga a luz</p>
        </div>
        <img className="ImageMode" alt="" src="/assets/images/moon.png" />
      </label>
      <label className="ModeDark" for="Mode">
        <div className="BoxTextMode BoxTextModeWhite">
          <p> Acender a luz</p>
        </div>
        <img className="ImageMode" alt="" src="/assets/images/sun.svg" />
      </label>
    </Header>
  );
}
