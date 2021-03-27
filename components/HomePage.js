import React from "react";
// import "../styles/homepage.scss";
// import web from "../img/web.png";
// import mobile from "../img/mobile.png";
// import desktop from "../img/desktop.png";
function HomePage() {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>The Mega Dev community</h1>
        <p>
          Join us at Mega Dev community server. Share information with all kinds
          of developers. You can even learn or teach
        </p>
        <button className="join-btn">
          <a href="https://discord.gg/NRtaCtEQpe">Join Us</a>
        </button>
      </div>

      <div className="posts">
        <div className="posts-head">
          <h1>community</h1>
        </div>
        <div className="posts-content">
          <div className="col1">
            <div className="post">
              <div className="left">
                <img src={'/web.png'} alt="" href="https://discord.gg/NRtaCtEQpe" />
              </div>
              <div className="right">
                <h3>WEB DEVELOPING</h3>
                <h4>You can join a perfect team of web developers</h4>
              </div>
            </div>
          </div>

          <div className="col2 ">
            <div className="post margining post-reverse">
              <div className="left">
                <img src={'/mobile.png'} alt="" />
              </div>
              <div className="right">
                <h3>Mobile</h3>
                <h4>Join our mobile developers and interested newbies</h4>
              </div>
            </div>

            <div className="post margining">
              <div className="left">
                <img src={'/desktop.png'} alt="" />
              </div>
              <div className="right">
                <h3>Desktop</h3>
                <h4>
                  Develop desktop applications by joining the MegaDev gang
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
