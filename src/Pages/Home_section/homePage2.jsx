import { useState, useEffect } from "react";
import React from "react";
import Icon1 from "../../Assets/icon1png.png";
import Icon2 from "../../Assets/icon2.png";
import Icon3 from "../../Assets/icon3.png";
import Phone2 from "../../Assets/phone2.png";
import { Box, Container, Typography } from "@mui/material";
import AadharCard from "../../Assets/aadharcard.png";
import Qr from "../../Assets/qr.png";
import Component1 from "../../Assets/component1.png";
import Component2 from "../../Assets/component2.png";
import Component3 from "../../Assets/component3.png";
import { motion } from "framer-motion";
const HomePage2 = () => {
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
         heading: "Unique and Reliable Identity",
         icon: Icon1,
         description:
            "Health ID cards offer a highly secure and encrypted platform. User consent is mandatory for accessing their PHR every time",
      },
      {
         active: 2,
         heading: "Consolidated Benefits Platform",
         icon: Icon2,
         description:
            "Effortlessly link diverse healthcare benefits, from public health programs to insurance schemes, with your ABHA number.",
      },
      {
         active: 3,
         heading: "Quick and Easy Registration",
         icon: Icon3,
         description:
            "Register swiftly by entering basic information and validating your Aadhaar or mobile number to generate your Health ID card.",
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
                     {activeBox === 3 ? (
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
                              src={AadharCard}
                              height="200px"
                              width="200px"
                              alt=""
                              left="10vh"
                              marginTop="100px"
                              position="relative"
                              top="18vh"
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
                     ) : (
                        <></>
                     )}
                     {activeBox === 2 ? (
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
                                 src={Component2}
                                 height="200px"
                                 width="200px"
                                 alt=""
                                 left="60vh"
                                 marginTop="100px"
                                 position="relative"
                                 top="5vh"
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
                                 src={Component1}
                                 height="200px"
                                 width="200px"
                                 alt=""
                                 left="60vh"
                                 marginTop="100px"
                                 position="relative"
                                 top="38vh"
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
                                 src={Component3}
                                 height="200px"
                                 width="200px"
                                 alt=""
                                 left="65vh"
                                 marginTop="100px"
                                 position="relative"
                                 top="5vh"
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
                        </>
                     ) : (
                        <></>
                     )}
                     {activeBox === 1 ? (
                        <motion.Box
                           initial={{ y: 0 }}
                           animate={{ y: 30 }}
                           transition={{
                              repeat: Infinity,
                              ease: "linear",
                              repeatType: "mirror",
                              duration: 5,
                           }}>
                           <Box
                              component="img"
                              src={Qr}
                              height="200px"
                              width="200px"
                              alt=""
                              left="20vh"
                              marginTop="100px"
                              position="relative"
                              top="18vh"
                              sx={{
                                 "@media (max-width: 800px)":
                                    {
                                       height: "150px",
                                       width: "150px",
                                       left: "15vh",
                                       marginTop: "50px",
                                       top: "5vh",
                                    },
                              }}
                           />
                        </motion.Box>
                     ) : (
                        <></>
                     )}
                     <Box
                        component="img"
                        src={Phone2}
                        alt=""
                        sx={{
                           display: {
                              width: "90%",
                              height: "90%",
                           },
                        }}
                     />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Container>
   );
};

export default HomePage2;
