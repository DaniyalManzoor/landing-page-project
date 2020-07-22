import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
const AboutUs = () => {
  const progressBarKeyframe85 = [{ width: "0%" }, { width: "85%" }];
  const progressBarKeyframe80 = [{ width: "0%" }, { width: "80%" }];
  const progressBarKeyframes65 = [{ width: "0%" }, { width: "65%" }];

  const { ref: reactPrograssBar } = useWebAnimations({
    keyframes: [...progressBarKeyframe85],
    timing: {
      duration: 1000,
      fill: "forwards",
    },
  });
  const { ref: htmlProgressBar } = useWebAnimations({
    keyframes: [...progressBarKeyframe80],
    timing: {
      delay: 400,
      duration: 1000,
      fill: "forwards",
    },
  });
  const { ref: javascriptProgressBar } = useWebAnimations({
    keyframes: [...progressBarKeyframe80],
    timing: {
      delay: 800,
      duration: 1000,
      fill: "forwards",
    },
  });
  const { ref: pythonProgressBar } = useWebAnimations({
    keyframes: [...progressBarKeyframes65],
    timing: {
      delay: 1200,
      duration: 1000,
      fill: "forwards",
    },
  });
  const { ref: djangoProgressBar } = useWebAnimations({
    keyframes: [...progressBarKeyframes65],
    timing: {
      delay: 1600,
      duration: 1000,
      fill: "forwards",
    },
  });
  const { ref: graphicToolProgressBar } = useWebAnimations({
    keyframes: [...progressBarKeyframes65],
    timing: {
      delay: 2000,
      duration: 1000,
      fill: "forwards",
    },
  });
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About us</h2>
            <div className="about-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat ut ab itaque praesentium facilis vel voluptate
                perspiciatis culpa tempore eum alias dicta qui, reprehenderit,
                sunt dignissimos nemo! Iste, nemo aspernatur.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Repellat ut ab itaque
                praesentium facilis vel voluptate perspiciatis culpa tempore eum
                alias dicta qui, reprehenderit, sunt dignissimos nemo! Iste,
                nemo aspernatu
              </p>
            </div>
            <button type="button" className="btn">
              Read more
            </button>
          </div>
          <div className="col-md-6 skill-bar">
            <p>React</p>
            <div className="progress">
              <div className="progress-bar" ref={reactPrograssBar}>
                85%
              </div>
            </div>
            <p>HTML & CSS</p>
            <div className="progress">
              <div className="progress-bar" ref={htmlProgressBar}>
                80%
              </div>
            </div>
            <p>Javascript</p>
            <div className="progress">
              <div className="progress-bar" ref={javascriptProgressBar}>
                80%
              </div>
            </div>
            <p>Python</p>
            <div className="progress">
              <div className="progress-bar" ref={pythonProgressBar}>
                65%
              </div>
            </div>
            <p>Django</p>
            <div className="progress">
              <div className="progress-bar" ref={djangoProgressBar}>
                65%
              </div>
            </div>
            <p>Adobe illustrator & Photoshop</p>
            <div className="progress">
              <div className="progress-bar" ref={graphicToolProgressBar}>
                65%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
