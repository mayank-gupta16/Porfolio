import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">

          {/* row 1 */}
          <div className="col-12 col-md-5 order-0 order-md-1 m-5 align-items-center">
            <div className="animation-home-page">
              <Player
                autoplay
                loop
                src=".\Animations\animation_ll6uhmt1.json"
                style={{ height: "600px", width: "600px" }}
              ></Player>
            </div>
          </div>



          <div className="col-12 col-md-5 order-1 order-md-0">
            <div className="animated-title m-5">
              <div className="text-top">
                <div>
                  <span>Hello!</span>
                  <span>I am Mayank Gupta</span>
                </div>
              </div>
              <div className="text-bottom">
                <div>
                  <Typewriter
                    options={{
                      strings: [
                        "SOFTWARE DEVELOPER",
                        "DATA SCIENTIST",
                        "CLOUD ENGINEER"
                      ],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: "typewriter-wrapper",
                      cursorClassName: "typewriter-cursor",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* row2  */}
          
        </div>

      </div>
    </>
  );
}
