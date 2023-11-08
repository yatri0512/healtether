import Achiv1 from "../../Assets/carousel1.jpg";
import Achiv2 from "../../Assets/carousel2.jpg";
import Achiv3 from "../../Assets/carousel3.jpg";
import Achiv4 from "../../Assets/carousel4.jpg";
import { Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
   Autoplay,
   Pagination,
   Navigation,
} from "swiper/modules";

export default function HomePage3() {
   return (
         <Box
            alignItems="center"
            justifyContent={"center"}
            padding='10%'>
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               className="mySwiper">
               <SwiperSlide>
                  <Box
                     component="img"
                     src={Achiv1}
                     alt=""
                     sx={{
                        display: {
                           width: "100%",
                        },
                     }}
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Box
                     component="img"
                     src={Achiv2}
                     alt=""
                     sx={{
                        display: {
                           width: "100%",
                        },
                     }}
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Box
                     component="img"
                     src={Achiv3}
                     alt=""
                     sx={{
                        display: {
                           width: "100%",
                        },
                     }}
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Box
                     component="img"
                     src={Achiv4}
                     alt=""
                     sx={{
                        display: {
                           width: "100%",
                        },
                     }}
                  />
               </SwiperSlide>
            </Swiper>
         </Box>
   );
}
