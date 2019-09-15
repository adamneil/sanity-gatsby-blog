import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoYoutube from 'react-ionicons/lib/LogoYoutube'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'


const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer class="footer footer-big" style={{zIndex: '9', position: 'relative'}}>
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-md-4">
              <h6 style={{fontSize: 12}}>ABOUT</h6>
              <p style={{color: "54585a", fontSize: 12, fontWeight: 'bolder'}}>
                      As the first private drone company founded in North Dakota, ISight RPV Services provides Remotely Piloted Vehicle operations to agricultural, critical infrastructure, wildlife management, insurance, and emergency services clients so they can unlock the value and efficiency of collecting data with unmanned aircraft.
              </p>
            </div>

            <div class="col-md-4">
              <h6 style={{fontSize: 12}}>SOCIAL FEED</h6>
              <div class="social-feed">
                {/* <div class="feed-line">
                  <i class="fa fa-facebook-square"></i>
                  <p style="color: #54585a; font-size: 12px">{{ feed1 }}</p>
                </div>
                <div class="feed-line">
                  <i class="fa fa-facebook-square"></i>
                  <p style="color: #54585a; font-size: 12px">{{ feed2 }}</p>
                </div> */}
              </div>
            </div>

            <div class="col-md-4">
              <h6 style={{fontSize: 12}}>TWITTER FEED</h6>
              <div class="gallery-feed">
                <img src="/images/twitter1.jpg" className="img img-raised img-rounded" alt="" />
                <img src="/images/twitter2.jpg" class="img img-raised img-rounded" alt="" />
                <img src="/images/twitter3.jpg" class="img img-raised img-rounded" alt="" />
                <img src="/images/twitter5.jpg" class="img img-raised img-rounded" alt="" />

                <img src="/images/twitter5.jpg" class="img img-raised img-rounded" alt="" />
                <img src="/images/twitter6.jpg" class="img img-raised img-rounded" alt="" />
                <img src="/images/twitter7.jpg" class="img img-raised img-rounded" alt="" />
                <img src="/images/twitter8.jpg" class="img img-raised img-rounded" alt="" />
              </div>

            </div>
          </div>
        </div>


        <hr />

        <ul className="float-left list-inline">
          <li className="list-inline-item">
            <a href="/">
              Home
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/services/agriculture">
              Services
            </a>
          </li >
          <li className="list-inline-item">
            <a href="/team">
              Team
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/gallery">
              Gallery
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/contactus">
              Contact Us
            </a>
          </li>
        </ul>

        <ul class="float-right">
          <li>
            <a href="https://twitter.com/isightrpv" target="_blank" >
              <LogoTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/isightrpv" target="_blank" >
              <LogoFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCL7VnI_Ya5NEHnf16IUI1Gg" target="_blank" >
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
)

export default Layout
