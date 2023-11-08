import { Box } from "@mui/material";
import React from "react";
import Section1 from "./Home_section/Section1";
import Section2 from "./Home_section/Section2";
import Blueimg from "../Assets/blueimg.png";
import Yellowimg from "../Assets/yellowimg.png";
import HomePage1 from "./Home_section/homePage1";
import HomePage2 from "./Home_section/homePage2";
import HomePage3 from "./Home_section/homePage3";
import HomePage4 from "./Home_section/homePage4";
import HomePage5 from "./Home_section/homePage5";
import HomePage6 from "./Home_section/homePage6";
import HomePage7 from "./Home_section/homePage7";
import HomePage8 from "./Home_section/homePage8";
import HomePage9 from "./Home_section/homePage9";
import HomePage10 from "./Home_section/homePage10";
import HomePage11 from "./Home_section/homePage11";
const Home = () => {
   return (
      <>
         <Box width="100%" margin={"auto"}>
            <Box
               sx={{
                  display: {
                     boxSizing: "border-box",
                     display: "grid",
                     gridTemplateColumns: "80% 20%",
                     flexFlow: "wrap",
                     marginTop: '-80px',
                     width:'100%',
                     marginLeft: '-80px',
                     height: '100%'
                  },
                  "@media (max-width: 800px)": {
                     display: "grid",
                     gridTemplateColumns: "100%",
                     height:'max-content'
                  },
               }}>
               <Box
                  style={{
                     boxSizing: "border-box",
                     margin: "0px",
                  }}>
                  <Section1 />
               </Box>
               <Box
                  style={{
                     boxSizing: "border-box",
                     margin: "0px",
                  }}>
                  <Section2 />
               </Box>
            </Box>
            <Box
               overflow="hidden"
               position="relative"
               backgroundColor="rgb(255, 255, 255)"
               padding="2%">
               <Box padding="80px 0px">
                  <Box
                     marginLeft="1%"
                     sx={{
                        "@media (min-width: 600px)": {
                           marginBottom: "0px",
                           marginTop: "24px",
                        },
                     }}>
                     <Box
                        display="flex"
                        gap="10px"
                        sx={{
                           "@media (max-width: 600px)": {
                              flexDirection: "row",
                              marginTop: "64px",
                           },
                        }}>
                        <Box
                           component="img"
                           src={Blueimg}
                           alt=""
                           sx={{
                              display: {
                                 width: "50%",
                              },
                           }}
                        />
                        <Box
                           component="img"
                           src={Yellowimg}
                           alt=""
                           sx={{
                              display: {
                                 width: "50%",
                              },
                           }}
                        />
                     </Box>
                  </Box>
               </Box>
               <HomePage1 />
               <HomePage2 />
               <HomePage3 />
               <HomePage4 />
               <HomePage5 />
               <HomePage6 />
               <HomePage7 />
               <HomePage8 />
               <HomePage9 />
               <HomePage10 />
               <HomePage11 />
            </Box>
         </Box>
      </>
   );
};

export default Home;
