import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Feature1 from "../../Assets/feature1.png";
import Feature2 from "../../Assets/feature2.png";
import Feature3 from "../../Assets/feature3.png";
import Achiv1 from "../../Assets/achiv1jpg.jpg";
import Achiv2 from "../../Assets/achiv2jpg.jpg";
import Achiv3 from "../../Assets/achiv3jpg.jpg";
import Achiv4 from "../../Assets/achiv4jpg.jpg";
const homePage10 = () => {
   const Data = [
      {
         icon: Feature1,
         heading: "Lab Booking",
         description:
            "Find Labs, Book Home Services, And Get Reports On The YORE Care App!",
      },
      {
         icon: Feature2,
         heading: "Online Teleconsultation",
         description:
            "Find Doctors, Clinics, And Book Appointments With The YORE Care App!",
      },
      {
         icon: Feature3,
         heading: "Pharmacy and Health Store",
         description:
            "Buy Medicines, Health, And Wellness Products From The YORE Care App!",
      },
   ];
   const Data1 = [
      {
         icon: Achiv1,
         heading: "NHA APPROVED",
      },
      {
         icon: Achiv2,
         heading: "ABDM COMPLIANT",
      },
      {
         icon: Achiv3,
         heading: "DIGITAL INDIA",
      },
      {
         icon: Achiv4,
         heading: "MAKE IN INDIA",
      },
   ];
   return (
      <Container maxWidth="lg">
         <Box
            display="grid"
            gridTemplateColumns={"25% 25% 25%"}
            gap={5}
            alignItems="center"
            margin="80px auto auto"
            width="100%"
            paddingBottom="10%"
            alignItem="center"
            justifyContent="center"
            sx={{
               "@media (max-width: 800px)": {
                  display: "grid",
                  gridTemplateColumns: "100%",
                  height: "max-content",
               },
            }}>
            {Data.map((Val) => {
               return (
                  <Box>
                     <Box
                        border="2px solid rgba(145, 158, 171, 0.12)"
                        display="block"
                        padding=" 20px 12px"
                        borderRadius="16px"
                        height="100%"
                        textAlign="center"
                        sx={{
                           ":hover": {
                              boxShadow:
                                 "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                           },
                           "@media (max-width: 800px)": {
                              padding: " 5px 3px",
                           },
                        }}>
                        <Box height="100%">
                           <Box
                              component="img"
                              src={Val.icon}
                              alt=" "
                              sx={{
                                 width: "80px",
                                 height: "80px",
                                 "@media (max-width: 800px)":
                                    {
                                       width: "40px",
                                       height: "40px",
                                    },
                              }}
                           />
                           <Typography
                              variant="h6"
                              height="60px"
                              fontWeight={700}
                              sx={{
                                 "@media (max-width: 800px)":
                                    {
                                        height:"50px"
                                    },
                              }}>
                              {Val.heading}
                           </Typography>
                           <Typography
                              variant="h6"
                              fontSize="0.9rem"
                              marginTop="15px"
                              height="50px"
                              fontWeight={500}
                              sx={{
                                 "@media (max-width: 800px)":
                                    {
                                       fontSize:"0.9rem",
                                    },
                              }}>
                              {Val.description}
                           </Typography>
                        </Box>
                     </Box>
                  </Box>
               );
            })}
         </Box>
         <Box
            display="grid"
            gridTemplateColumns={"20% 20% 20% 20%"}
            columnGap={5}
            alignItems="center"
            margin="80px auto auto"
            width="100%"
            paddingBottom="10%"
            alignItem="center"
            justifyContent="center"
            sx={{
               "@media (max-width: 800px)": {
                  display: "grid",
                  gridTemplateColumns: "100%",
                  height: "max-content",
               },
            }}>
            {Data1.map((Val) => {
               return (
                  <Box>
                     <Box
                        display="block"
                        padding=" 5px 0px"
                        borderRadius="16px"
                        height="100%"
                        textAlign="center">
                        <Box height="100%">
                           <Box
                              component="img"
                              src={Val.icon}
                              alt=" "
                              sx={{
                                 width: "150px",
                                 height: "150px",
                                 "@media (max-width: 800px)": {
                                    width: "80px",
                                    height: "80px",
                                 },
                              }}
                           />
                           <Typography
                              variant="h6"
                              height="60px"
                              fontWeight={700}
                               sx={{
                                 "@media (max-width: 800px)": {
                                    fontSize: '20px'
                                 },
                              }}>
                              {Val.heading}
                           </Typography>
                        </Box>
                     </Box>
                  </Box>
               );
            })}
         </Box>
      </Container>
   );
};

export default homePage10;
