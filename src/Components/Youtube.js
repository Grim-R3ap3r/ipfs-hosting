import React from "react";
import thumb1 from "../Thumbnails/thumbnail-1.webp";
import thumb2 from "../Thumbnails/thumbnail-2.webp";
import thumb3 from "../Thumbnails/thumbnail-3.webp";
import thumb4 from "../Thumbnails/thumbnail-4.webp";
import thumb5 from "../Thumbnails/thumbnail-5.webp";
import thumb6 from "../Thumbnails/thumbnail-6.webp";
import channel1 from "../Thumbnails/channel-1.jpeg";
import channel2 from "../Thumbnails/channel-2.jpeg";
import channel3 from "../Thumbnails/channel-3.jpeg";
import channel4 from "../Thumbnails/channel-4.jpeg";
import channel5 from "../Thumbnails/channel-5.jpeg";
import channel6 from "../Thumbnails/channel-6.jpeg";
import "./Youtube.css";
import "./Youtube.css";
const Youtube = () => {
  return (
    <>
      <input className="search-bar" type="text" placeholder="Search"></input>

      <div className="video-grid">
        {/* thumb1 */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb1}></img>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel1}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">
                Talking Tech and AI with Google CEO Sundar Pichai!
              </p>
              <p className="video-autho">Marques Brownlee &#10003;</p>

              <p className="video-stat">3.4M views &#183; 6 months ago</p>
            </div>
          </div>
        </div>

        {/* thumb2 */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb2}></img>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel2}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">Try Not To Laugh Challenge #9</p>
              <p className="video-autho">Markiplier &#10003;</p>

              <p className="video-stat">19M views &#183; 4 years ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb3}></img>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel3}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">
                Talking Tech and AI with Google CEO Sundar Pichai!
              </p>
              <p className="video-autho">Marques Brownlee &#10003;</p>

              <p className="video-stat">3.4M views &#183; 6 months ago</p>
            </div>
          </div>
        </div>

        {/* thumb2 */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb4}></img>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel4}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">Try Not To Laugh Challenge #9</p>
              <p className="video-autho">Markiplier &#10003;</p>

              <p className="video-stat">19M views &#183; 4 years ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb5}></img>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel5}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">
                Talking Tech and AI with Google CEO Sundar Pichai!
              </p>
              <p className="video-autho">Marques Brownlee &#10003;</p>

              <p className="video-stat">3.4M views &#183; 6 months ago</p>
            </div>
          </div>
        </div>

        {/* thumb2 */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb6}></img>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel6}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">Try Not To Laugh Challenge #9</p>
              <p className="video-autho">Markiplier &#10003;</p>

              <p className="video-stat">19M views &#183; 4 years ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
