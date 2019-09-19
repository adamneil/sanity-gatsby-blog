import React from "react";
import Header from "./header";

import "../styles/layout.css";
import styles from "./layout.module.css";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoYoutube from "react-ionicons/lib/LogoYoutube";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer class="footer footer-big" style={{ zIndex: "9", position: "relative" }}>
      <div class="container">
        <ul className="float-left list-inline">
          <li className="list-inline-item">
            <a href="https://www.isightrpv.com">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.isightrpv.com/services/agriculture">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.isightrpv.com/team">Team</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.isightrpv.com/gallery">Gallery</a>
          </li>
          <li className="list-inline-item">
            <a href="htttps://www.isightrpv.com/contactus">Contact Us</a>
          </li>
        </ul>

        <ul class="float-right">
          <li>
            <a href="https://twitter.com/isightrpv" target="_blank">
              <LogoTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/isightrpv" target="_blank">
              <LogoFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCL7VnI_Ya5NEHnf16IUI1Gg" target="_blank">
              <LogoYoutube />
            </a>
          </li>
        </ul>

        <div class="copyright pull-right">
          Copyright &copy;2017 ISight | RPV All Rights Reserved.
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
