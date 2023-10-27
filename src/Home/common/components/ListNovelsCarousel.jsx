import React from "react";
import { SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";

import Carousel from "@/src/common/components/Carousel/Carousel";
import NavigationButtons from "@/src/common/components/Carousel/NavigationButtons";
import styles from "./styles.module.css";
import NovelCard from "./NovelCard";

const ListNovelsCarousel = ({ slides, prevButtonClass, nextButtonClass }) => {
  return (
    <Box display="flex" flexDirection="column" position="relative" width="100%">
      <Carousel
        prevButtonClass={prevButtonClass}
        nextButtonClass={nextButtonClass}
        customStyles={styles.swiper}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide className={styles.swiper_slide} key={slide.index}>
              <NovelCard data={slide} />
            </SwiperSlide>
          );
        })}
      </Carousel>
      <NavigationButtons
        prevButtonClass={prevButtonClass}
        nextButtonClass={nextButtonClass}
      />
    </Box>
  );
};

export default ListNovelsCarousel;
