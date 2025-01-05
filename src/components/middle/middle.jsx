import React from "react";
import "./middle.css";
import mahi_img1 from "../../assets/IMG_20250102_144006_957 (1).jpg";
import mahi_img2 from "../../assets/mahi2.jpg";
import mahi_img3 from "../../assets/mahi3.jpg";
import mahi_img4 from "../../assets/mahi4.jpg";
import mahi_img5 from "../../assets/mahi5.jpg";
import mahi_img6 from "../../assets/mahi6.jpg";
import symbol from "../../assets/heart-love-like-favourite-follow-svgrepo-com.svg";
import { useRef, useEffect } from "react";
import mahi_img8 from "../../assets/mahi8.jpg";
import mahi_img9 from "../../assets/mahi9.jpg";
import symbol_two from "../../assets/heart-svgrepo-com (3).svg";
import mahi_pushpa from "../../assets/mahi_pushpa.jpg";

const middle = () => {
  const middleref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        middleref.current.classList.add("middle_change");
      } else {
        middleref.current.classList.remove("middle_change");
      }
    });
  }, []);
  return (
    <div ref={middleref} className="middle">
      <div className="heading">
        <h3>This is for my girl</h3>
      </div>

      <div className="images">
        <div className="image_sec1">
          <div className="cover_image">
            <div className="container_">
              <img src={mahi_img1} alt="" />
            </div>
            <div className="symbol">
              <img src={symbol} alt="" />
            </div>
          </div>

          <div className="cover_image">
            <div className="symbol_two">
              <img src={symbol_two} alt="" />
            </div>
            <div className="img_sec">
              <img src={mahi_img2} alt="" />
            </div>
          </div>

          <div className="cover_image">
            <div className="container_">
              <img src={mahi_img3} alt="" />
            </div>
            <div className="symbol">
              <img src={symbol} alt="" />
            </div>
          </div>

          <div className="cover_image">
            <div className="symbol_two">
              <img src={symbol_two} alt="" />
            </div>
            <div className="img_sec">
              <img src={mahi_img4} alt="" />
            </div>
          </div>

          <div className="cover_image">
            <div className="container_">
              <img src={mahi_img8} alt="" />
            </div>
            <div className="symbol">
              <img src={symbol} alt="" />
            </div>
          </div>

          <div className="cover_image">
            <div className="symbol_two">
              <img src={symbol_two} alt="" />
            </div>
            <div className="img_sec">
              <img src={mahi_img5} alt="" />
            </div>
          </div>

          <div className="cover_image">
            <div className="container_">
              <img src={mahi_img9} alt="" />
            </div>
            <div className="symbol">
              <img src={symbol} alt="" />
            </div>
          </div>

          <div className="cover_image">
            <div className="symbol_two">
              <img src={symbol_two} alt="" />
            </div>
            <div className="img_sec">
              <img src={mahi_img6} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="message">
        <div className="message_">
          <div className="message_sec">
            <p>hi Mahi first of all sorry for every thing ...</p>
            <br />
            <p>
              Nanu ninu chala sarlu hurt chasa kani nuvu nanu apudu forgive
              chasav esari kuda okasari forgive chay inkha apudu nanu ninu ela
              hurt chayanu
            </p>
            <br />
            <p>
              And ee page create chasindhi nikosem aa plese malli manam normal
              ga vundham 31 night roju laa and nanu (NANI) ani pilluvu amma ni
              foot dagara padi vunta
            </p>
            <br />
            <p>Really sorry for every thing i want you in my life for ever</p>
            <br />
            <p>
              Naku vunna okaoka loved one person nuva i dont want you loose you
              at any cost
            </p>
            <br />
            <p>
              Inkha chala vundhi chapadaniki kani explain chayadem naku sariga
              radhu kani okati cheputha nanu epudu dhaka em evalakapoya but na
              complete efforts petti ee site chasa for you and i enjoy it ni
              kosem chasinapudu
            </p>
            <br />
            <p>
              Niku ee page nachutha plese NANI ani oka MSG chay naku nanu
              chasina work ki full ga satisfy avutha 🥺
            </p>
            <br />
            <p>And there is another suprice for you whith your loved one ❤️ scroll down</p>
          </div>
        </div>
      </div>
      <div className="ending">
        <div className="ending_two">
          <div className="picture">
            <img src={mahi_pushpa} alt="" />
            <p>
              I love you Mahi <b>❤️</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default middle;
