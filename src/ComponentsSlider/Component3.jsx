import React, { useState } from "react";
import SubSlider from "../SubSlider/SubSlider";
import "../styles/comp3Style.css";

import plate from "../image/thirth_page/plate.png";
import calendar from "../image/thirth_page/calendar.png";
import bottle from "../image/thirth_page/bottle.png";
import pink_bubble_1 from "../image/thirth_page/pink_bubble_1.png";
import pink_bubble_2 from "../image/thirth_page/pink_bubble_2.png";
import pink_bubble_3 from "../image/thirth_page/pink_bubble_3.png";

import blue_bubble from "../image/thirth_page/blue_bubble_1.png";
import cross from "../image/thirth_page/cross.png";

const Component3 = ({ showModal, setshowModal }) => {
  return (
    <div className="thirth_slide_container">
      <div
        className="modal_blackout"
        style={{ display: showModal ? "block" : "none" }}
      ></div>
      <div className="thirth_slide_bottle_container">
        <img
          className="bottle_image"
          src={bottle}
          style={{ zIndex: showModal ? "7" : "" }}
        ></img>
      </div>
      <div className="bubble_container">
        <img
          className="pink_bubble_1"
          src={pink_bubble_1}
          style={{ zIndex: showModal ? "6" : "" }}
        ></img>
        <img
          className="pink_bubble_2"
          src={pink_bubble_2}
          style={{ zIndex: showModal ? "6" : "" }}
        ></img>
        <img
          className="pink_bubble_3"
          src={pink_bubble_3}
          style={{ zIndex: showModal ? "7" : "" }}
        ></img>
        <img
          className="blue_bubble_1"
          src={blue_bubble}
          style={{ zIndex: showModal ? "7" : "" }}
        ></img>
        <img
          className="blue_bubble_2"
          src={blue_bubble}
          style={{ zIndex: showModal ? "7" : "" }}
        ></img>
        <img
          className="blue_bubble_3"
          src={blue_bubble}
          style={{ zIndex: showModal ? "7" : "" }}
        ></img>
        <img
          className="blue_bubble_4"
          src={blue_bubble}
          style={{ zIndex: showModal ? "6" : "" }}
        ></img>
        <img
          className="blue_bubble_5"
          src={blue_bubble}
          style={{ zIndex: showModal ? "7" : "" }}
        ></img>
      </div>
      <div className="thirth_slide_block_container">
        <div className="thirth_slide_text">
          <p
            className="key_word"
            style={{
              zIndex: showModal ? "7" : "",
              position: showModal ? "relative" : "",
            }}
          >
            {showModal ? "ПРЕИМУЩЕСТВА" : "Ключевое сообщение"}
          </p>
          <p
            className="brand_word"
            style={{
              zIndex: showModal ? "7" : "",
              position: showModal ? "relative" : "",
            }}
          >
            BRAND<b>XY</b>
          </p>
        </div>
        <div className="base_blocks">
          <div className="plate block">
            <img className="block_image" src={plate}></img>
            <p className="text_1_block">
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vesibulum
              lorem sed risus ultricies
            </p>
          </div>
          <div className="calendar block">
            <img className="block_image" src={calendar}></img>
            <p className="text_1_block">
              A arcu <br /> cursus vitae
            </p>
          </div>
          <div className="btn_modal">
            <button
              onClick={() => {
                setshowModal(true);
              }}
              className="more_info"
            >
              <div className="icon_btn">+</div>Подробнее
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal_blocks"
        style={{ display: showModal ? "flex" : "none" }}
      >
        <button className="close_btn" onClick={() => setshowModal(false)}>
          <img className="cross_image" src={cross}></img>
        </button>
        <SubSlider />
      </div>
    </div>
  );
};

export default Component3;
