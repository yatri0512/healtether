import { Box } from "@mui/material";
import React from "react";
import Phone from "../../Assets/phone.png";
import Sec1 from "../../Assets/sec1img.png";
import { motion } from "framer-motion";
const Section2 = () => {
   return (
      <Box
         marginTop="80px"
         sx={{
            "@media (max-width: 800px)": {
               marginTop: "0px",
            },
         }}>
         <Box
            paddingTop="120px"
            sx={{
               "@media (max-width: 800px)": {
                  paddingTop: "100px",
               },
            }}>
            <Box
               display="flex"
               justifyContent="flex-end"
               marginRight="2vh"
               width="70%">
               <motion.Box
                  initial={{ x: 0 }}
                  animate={{ x: 100 }}
                  transition={{
                     repeat: Infinity,
                     ease: "linear",
                     repeatType: "mirror",
                     duration: 5,
                  }}>
                  <Box
                     component="img"
                     src={Sec1}
                     height="200px"
                     width="200px"
                     alt=""
                     left="10vh"
                     marginTop="100px"
                     position="relative"
                     top="18vh"
                     sx={{
                        "@media (max-width: 800px)": {
                           marginTop: "5vh",
                           height: "100px",
                           width: "100px",
                           top: "10vh",
                        },
                        "@media (max-width: 500px)": {
                           marginTop: "2vh",
                        },
                     }}
                  />
               </motion.Box>
               <Box
                  component="img"
                  src={Phone}
                  alt=""
                  sx={{
                     display: {
                        height: "500px",
                        padding: "10px",
                     },
                     "@media (max-width: 800px)": {
                        height: "400px",
                     },
                     "@media (max-width: 500px)": {
                        height: "300px",
                     },
                  }}
               />
            </Box>
         </Box>
      </Box>
   );
};

export default Section2;
