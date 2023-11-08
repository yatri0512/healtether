import { useState, useEffect } from "react";
import React from "react";
import Icon1 from "../../Assets/icon4.png";
import Icon2 from "../../Assets/icon5.png";
import Icon3 from "../../Assets/icon6.png";
import Phone3 from "../../Assets/phone3.jpg";
import Phone4 from "../../Assets/phone4.png";
import Phone5 from "../../Assets/phone5.jpg";
import { Box, Container, Typography } from "@mui/material";
import Component4 from "../../Assets/component4.png";
import Component5 from "../../Assets/component5.png";
import Component6 from "../../Assets/component6.png";
import Component7 from "../../Assets/component7.png";
import { motion } from "framer-motion";
const HomePage5 = () => {
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
         heading: "DigiTrack",
         icon: Icon1,
         description:
            "Effortlessly record and manage digital details of your medical treatments. the patients in one practice.",
      },
      {
         active: 2,
         heading: "MedTrack",
         icon: Icon2,
         description:
            "Centralize medical documents, including diagnostic test reports and prescriptions, for easy future reference.",
      },
      {
         active: 3,
         heading: "CareTrack",
         icon: Icon3,
         description:
            "Enable doctors to access your comprehensive medical files, treatment history, and diagnostic reports through a single platform.",
      },
   ];
   const actives = [1, 2, 3];
   return (
      <Container maxWidth="lg">
         <Box padding="60px 10px 0px 10px">
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
                  marginTop="64px"
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
                           padding: "1%",
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
                                 src={Component4}
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
                                 src={Component6}
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
                                 src={Component7}
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
                                 src={Component7}
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
                                 src={Component5}
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

export default HomePage5;
