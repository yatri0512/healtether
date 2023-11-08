import { useState, useEffect } from "react";
import React from "react";
import Icon1 from "../../Assets/icon7.png";
import Icon2 from "../../Assets/icon8.png";
import Icon3 from "../../Assets/icon9.png";
import Phone3 from "../../Assets/phone6.png";
import Phone4 from "../../Assets/phone7.png";
import Phone5 from "../../Assets/phone8.png";
import { Box, Container, Typography } from "@mui/material";
import Component8 from "../../Assets/component8.png";
import Component9 from "../../Assets/component9.png";
import Component10 from "../../Assets/component10.png";
import Component11 from "../../Assets/component11.png";
import Component12 from "../../Assets/component12.png";
import { motion } from "framer-motion";
const HomePage8 = () => {
   const [activeBox, setActiveBox] = useState(1);

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveBox((prevBox) => (prevBox % 3) + 1);
      }, 5000);

      return () => clearInterval(interval);
   });
   const Data = [
      {
         active: 1,
         heading: "Activity Tracker",
         icon: Icon1,
         description:
            "Tracks steps, distance, calories burned, and other physical and activities.",
      },
      {
         active: 2,
         heading: "Water Tracker",
         icon: Icon2,
         description:
            "Measures and monitors heart rate during workouts or daily and activities.",
      },
      {
         active: 3,
         heading: "Sleep Tracker",
         icon: Icon3,
         description:
            "Monitors sleep patterns, providing insights into sleep quality and duration.",
      },
   ];
   const actives = [1, 2, 3];
   return (
      <Container maxWidth="lg">
         <Box
            padding="60px 10px"
            sx={{
               "@media (max-width: 800px)": {
                  padding: "0px",
               },
            }}>
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
                     "@media (max-width: 800px)": {
                        flexDirection: "column",
                        marginTop: "64px",
                     },
                  }}>
                  <Box
                     sx={{
                        display: {
                           width: "70%",
                           padding: "10%",
                        },
                        "@media (max-width: 800px)": {
                           width: "100%",
                           padding: "0%",
                        },
                     }}>
                     <Box
                        display="flex"
                        flexDirection={"column"}>
                        {Data.map((Val, index) => {
                           return (
                              <>
                                 {activeBox ===
                                 actives[index] ? (
                                    <Box>
                                       <Box
                                          maxWidth="100%"
                                          marginBottom="30px"
                                          display="flex"
                                          flexDirect="row"
                                          border="1px solid black"
                                          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                                          borderRadius="10px">
                                          <Box width="20%">
                                             <Box
                                                component="img"
                                                src={
                                                   Val.icon
                                                }
                                                alt=""
                                                sx={{
                                                   width: "70%",
                                                   height:
                                                      "50%",
                                                   marginTop:
                                                      "30%",
                                                   marginLeft:
                                                      "10%",
                                                   "@media (max-width: 800px)":
                                                      {
                                                         height:
                                                            "30%",
                                                      },
                                                }}
                                             />
                                          </Box>
                                          <Box
                                             width="70%"
                                             display="flex"
                                             padding="5px"
                                             flexDirection="column">
                                             <Typography
                                                variant="h6"
                                                bottom="5px"
                                                left="10px"
                                                backgroundColor="transparent">
                                                <Typography
                                                   variant="h6"
                                                   fontWeight="bold"
                                                   sx={{
                                                      "@media (max-width: 800px)":
                                                         {
                                                            fontSize:
                                                               "1rem",
                                                         },
                                                   }}>
                                                   {
                                                      Val.heading
                                                   }
                                                </Typography>
                                             </Typography>
                                             <Typography
                                                bottom="5px"
                                                paddingLeft="10px"
                                                sx={{
                                                   "@media (max-width: 800px)":
                                                      {
                                                         fontSize:
                                                            "0.8rem",
                                                      },
                                                }}>
                                                {
                                                   Val.description
                                                }
                                             </Typography>
                                          </Box>
                                       </Box>
                                    </Box>
                                 ) : (
                                    <Box>
                                       <Box
                                          maxWidth="100%"
                                          marginBottom="30px"
                                          display="flex"
                                          flexDirect="row"
                                          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                                          borderRadius="10px">
                                          <Box width="20%">
                                             <Box
                                                component="img"
                                                src={
                                                   Val.icon
                                                }
                                                alt=""
                                                sx={{
                                                   width: "70%",
                                                   height:
                                                      "50%",
                                                   marginTop:
                                                      "20%",
                                                   marginLeft:
                                                      "10%",
                                                   "@media (max-width: 800px)":
                                                      {
                                                         height:
                                                            "30%",
                                                      },
                                                }}
                                             />
                                          </Box>
                                          <Box
                                             width="70%"
                                             display="block"
                                             paddingTop="7%">
                                             <Typography
                                                variant="h6"
                                                bottom="5px"
                                                left="10px"
                                                backgroundColor="transparent">
                                                <Typography
                                                   variant="h6"
                                                   fontWeight="bold"
                                                   sx={{
                                                      "@media (max-width: 800px)":
                                                         {
                                                            fontSize:
                                                               "1rem",
                                                         },
                                                   }}>
                                                   {
                                                      Val.heading
                                                   }
                                                </Typography>
                                             </Typography>
                                          </Box>
                                       </Box>
                                    </Box>
                                 )}
                              </>
                           );
                        })}
                     </Box>
                  </Box>
                  <Box
                     display="flex"
                     justifyContent="flex-end"
                     sx={{
                        width: "40%",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        paddingTop: "4%",
                        "@media (max-width: 800px)": {
                           width: "80%",
                           paddingLeft: "1%",
                           paddingRight: "1%",
                           paddingTop: "1%",
                        },
                     }}>
                     {activeBox === 2 ? (
                        <>
                           <motion.Box
                              initial={{ x: 50 }}
                              animate={{ x: 100 }}
                              transition={{
                                 repeat: Infinity,
                                 ease: "linear",
                                 repeatType: "mirror",
                                 duration: 5,
                              }}>
                              <Box
                                 component="img"
                                 src={Component8}
                                 height="200px"
                                 width="200px"
                                 alt=""
                                 left="10vh"
                                 marginTop="100px"
                                 position="relative"
                                 top="10vh"
                                 sx={{
                                    "@media (max-width: 800px)":
                                       {
                                          height: "150px",
                                          width: "150px",
                                          left: "2vh",
                                          marginTop: "50px",
                                          top: "5vh",
                                       },
                                 }}
                              />
                           </motion.Box>
                           <Box
                              component="img"
                              src={Phone3}
                              alt=""
                              sx={{
                                 display: {
                                    width: "90%",
                                    height: "90%",
                                 },
                              }}
                           />
                        </>
                     ) : (
                        <></>
                     )}
                     {activeBox === 1 ? (
                        <>
                           <motion.Box
                              initial={{ x: 250 }}
                              animate={{ x: 200 }}
                              transition={{
                                 repeat: Infinity,
                                 ease: "linear",
                                 repeatType: "mirror",
                                 duration: 5,
                              }}>
                              <Box
                                 component="img"
                                 src={Component10}
                                 width="200px"
                                 alt=""
                                 left="60vh"
                                 marginTop="100px"
                                 position="relative"
                                 top="2vh"
                                 sx={{
                                    "@media (max-width: 800px)":
                                       {
                                          height: "150px",
                                          width: "150px",
                                          left: "32vh",
                                          marginTop: "50px",
                                       },
                                 }}
                              />
                           </motion.Box>
                           <motion.Box
                              initial={{ x: 0 }}
                              animate={{ x: 50 }}
                              transition={{
                                 repeat: Infinity,
                                 ease: "linear",
                                 repeatType: "mirror",
                                 duration: 5,
                              }}>
                              <Box
                                 component="img"
                                 src={Component11}
                                 width="200px"
                                 alt=""
                                 left="60vh"
                                 marginTop="100px"
                                 position="relative"
                                 top="30vh"
                                 sx={{
                                    "@media (max-width: 800px)":
                                       {
                                          height: "150px",
                                          width: "150px",
                                          left: "32vh",
                                          marginTop: "50px",
                                          top: "20vh",
                                       },
                                 }}
                              />
                           </motion.Box>

                           <motion.Box
                              initial={{ y: 0 }}
                              animate={{ y: 50 }}
                              transition={{
                                 repeat: Infinity,
                                 ease: "linear",
                                 repeatType: "mirror",
                                 duration: 5,
                              }}>
                              <Box
                                 component="img"
                                 src={Component12}
                                 width="200px"
                                 alt=""
                                 left="65vh"
                                 marginTop="100px"
                                 position="relative"
                                 top="2vh"
                                 sx={{
                                    "@media (max-width: 800px)":
                                       {
                                          height: "150px",
                                          width: "150px",
                                          left: "35vh",
                                          marginTop: "50px",
                                          top: "5vh",
                                       },
                                 }}
                              />
                           </motion.Box>
                           <Box
                              component="img"
                              src={Phone4}
                              alt=""
                              sx={{
                                 display: {
                                    width: "90%",
                                    height: "90%",
                                 },
                              }}
                           />
                        </>
                     ) : (
                        <></>
                     )}
                     {activeBox === 3 ? (
                        <>
                           <motion.Box
                              initial={{ x: 50 }}
                              animate={{ x: 100 }}
                              transition={{
                                 repeat: Infinity,
                                 ease: "linear",
                                 repeatType: "mirror",
                                 duration: 5,
                              }}>
                              <Box
                                 component="img"
                                 src={Component9}
                                 width="200px"
                                 alt=""
                                 left="20vh"
                                 marginTop="100px"
                                 position="relative"
                                 top="10vh"
                                 sx={{
                                    "@media (max-width: 800px)":
                                       {
                                          height: "150px",
                                          width: "150px",
                                          left: "2vh",
                                          marginTop: "50px",
                                          top: "5vh",
                                       },
                                 }}
                              />
                           </motion.Box>
                           <Box
                              component="img"
                              src={Phone5}
                              alt=""
                              sx={{
                                 display: {
                                    width: "90%",
                                    height: "90%",
                                 },
                              }}
                           />
                        </>
                     ) : (
                        <></>
                     )}
                  </Box>
               </Box>
            </Box>
         </Box>
      </Container>
   );
};

export default HomePage8;
