import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import styles from "./Carousal.module.css";

import "swiper/css";

const Carousal = ({ data = [], renderCardComponent }) => {
  const swiperRef = useRef(null);
  const prevLengthRef = useRef(data.length);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevLengthRef.current !== data.length
    ) {
      swiperRef.current.slideTo(0);
      prevLengthRef.current = data.length;
    }

    return () => {
      swiperRef.current = null;
    };
  }, [data.length]);

  if (!data.length) return null;

  return (
    <div className={styles.Wrapper}>
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
        speed={500}
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderCardComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
