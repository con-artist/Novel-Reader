import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@mui/material/Button";
import { Pagination, Navigation } from "swiper/modules";
import Box from "@mui/material/Box";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import styles from "./styles.module.css";
import NovelCard from "./NovelCard";

const ListNovelsCarousel = ({ slides }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        position="relative"
        width="100%"
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${styles.swiper_pagination_bullet}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiper_pagination_bullet_active}`,
          }}
          modules={[Pagination, Navigation]}
          className={styles.swiper}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide className={styles.swiper_slide} key={slide.index}>
                <NovelCard data={slide} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box
          display="flex"
          flexDirection="row"
          width="230px"
          margin="auto"
          position="relative"
          zIndex={3}
          sx={{
            bottom: 30,
          }}
          justifyContent="space-between"
        >
          <Button
            variant="outlined"
            className="swiper-prev"
            sx={{
              width: 25,
              height: 25,
              borderRadius: 1,
              p: 1,
              border: "1px solid #2F3A46",
              bgcolor: "#161C20",
              boxShadow: "inset 0 1px 1px #1014,0 1px 0.5px #0B0D0E",
            }}
          >
            <KeyboardArrowLeftIcon />
          </Button>
          <Button
            variant="outlined"
            className="swiper-next"
            sx={{
              width: 25,
              height: 25,
              borderRadius: 1,
              p: 0,
              border: "1px solid #2F3A46",
              bgcolor: "#161C20",
              boxShadow: "inset 0 1px 1px #1014,0 1px 0.5px #0B0D0E",
            }}
          >
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ListNovelsCarousel;
