import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../styles/Home/Carousel.module.css";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import createCoverUrl from "../utils/createCoverUrl";

export default function Carousel({ carouselData }) {
  const settings = {
    dots: true,
    speed: 500,
    centerMode: true,
    centerPadding: "18%",
    slidesToShow: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1500,
    ladyLoad: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "18%",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className={styles.divSection}>
      {carouselData.map((item) => {
        let id = item.id;
        let coverUrl = createCoverUrl(item.image_url.cover, id, 1200, 555);
        let originalTitle = item.original_title;
        return (
          <div key={item.id}>
            <h3 id="coverImg" className={styles.originalTitle}>
              {originalTitle}
            </h3>
            <button id="watchNowBtn" className={styles.watchNowBtn}>
              <BsPlayFill className={styles.playButton} />
              Watch
            </button>
            <Image priority={true} src={coverUrl} width="1200" height="555" alt="" />
          </div>
        );
      })}
    </Slider>
  );
}
