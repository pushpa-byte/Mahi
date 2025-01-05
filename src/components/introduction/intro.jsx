import React, { useEffect } from "react";
import "./intro.css";
import { useRef } from "react";
const intro = () => {
  const introref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        introref.current.classList.add('scroll_none');
      } else {
        introref.current.classList.remove('scroll_none');
      }
    });
  },[]);
  return (
    <>
      <div  className="intro">
        <div className="intro_sec">
          <div className="container">
            <p>
              ..hii Mahi <br />
              <br />
              This is for you
            </p>
          </div>
        </div>
      </div>
         <div ref={introref} className="scroll">
        <p>Scroll Down</p>
      </div>
    </>
  );
};

export default intro;
