import React from "react";
import "swiper/css";
import { Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import styles from "./styles.module.css";

const Carousel = ({
  children,
  prevButtonClass,
  nextButtonClass,
  customStyles,
}) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      navigation={{
        prevEl: `.${prevButtonClass}`,
        nextEl: `.${nextButtonClass}`,
      }}
      pagination={{
        clickable: true,
        bulletClass: `swiper-pagination-bullet ${styles.swiper_pagination_bullet}`,
        bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiper_pagination_bullet_active}`,
      }}
      modules={[Pagination, Navigation]}
      className={`${customStyles}`}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
