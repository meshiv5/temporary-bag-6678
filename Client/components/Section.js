import styles from "../styles/Home/Sections.module.css";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayFill } from "react-icons/bs";
import React, { Component, lazy, useRef, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import createCoverUrl from "../utils/createCoverUrl";
import { createListUrl } from "../utils/createCoverUrl";
import Loading from "../pages/[parts]/loading";
import { useRouter } from "next/router";

export default function Section({ sectionData, queryPart, SamePage }) {
  const router = useRouter();
  const settings = {
    dots: false,
    speed: 500,
    centerMode: false,
    // centerPadding: "18%",
    slidesToShow: 8,
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div>
      <header className={styles.header}>
        <Link href="">{sectionData.title}</Link>
        <div className="flex">
          <p
            onClick={() => {
              alert("Functionality Yet To be Implemented !");
            }}
            className={styles.moreButton}
          >
            More
          </p>
          <IoIosArrowForward className={styles.arrowLogo} />
        </div>
      </header>

      <Slider {...settings} className={styles.divSection}>
        {sectionData.items.map((item) => {
          let id = item.id;
          let coverUrl = createCoverUrl(item.image_url.cover, id, 321, 482, "portrait");
          let originalTitle = item.original_title;
          return (
            <div
              onClick={() => {
                if (SamePage) {
                  let asPath = router.asPath.split("/");
                  asPath.pop();
                  asPath = asPath.join("/");
                  router.push({
                    pathname: asPath + `/${item.id}`,
                  });
                } else router.push(`${queryPart}/${item.id}`);
              }}
              key={item.id + Math.random() * 100}
              className={styles.sectionCard}
            >
              <CustomImage coverUrl={coverUrl} listUrl={item.image_url.list} id={item.id} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
function CustomImage({ coverUrl, listUrl, id }) {
  const [src, setSrc] = useState(coverUrl);
  const countRef = useRef(1);
  return (
    <Image
      // loading="lazy"
      priority={true}
      className={styles.imageCard}
      src={src}
      width="321"
      height="482"
      alt=""
      onError={() => {
        countRef.current = countRef.current++;
        if (countRef.current > 2) {
          setSrc("/images/blurImageFail.jpg");
          return;
        }
        let img = createCoverUrl(listUrl, id, 321, 482, "list");
        setSrc(img);
      }}
    />
  );
}
