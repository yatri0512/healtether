import { Box, Typography } from "@mui/material";
import React from "react";
const About = () => {
   return (
      <Box width="100%" margin={"auto"} 
      alignItems= "center"
      justifyContent= "center"
      padding='10%'
      sx={{
        "@media (max-width: 800px)":{paddingTop:'30%'}
      }}>
         <Box
            sx={{
               display: {
                  boxSizing: "border-box",
                  display: 'flex',
                  flexFlow: "wrap",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign:'center'
               },
            }}>
            <Typography variant="h4" color="green">
               Healtether Care-your ticket to a healthier
               and happier you!
            </Typography>
            <Typography variant="h6">
               Healtether Care is not just another app in
               the crowd; we proudly belong to the Unified
               Health Interface approved by the{" "}
               <Typography variant='span' fontWeight="bold">
                  NHA (National Health Authority)
               </Typography>
               . At Healtether Care we work towards making
               healthcare interoperability a piece of the
               cake. It is like the Avengers, but instead of
               superpowers, we bring you seamless access to
               a wide range of healthcare services!
               Together, let us shape a future where
               healthcare is accessible, convenient, and
               rewarding.
            </Typography>
         </Box>
      </Box>
   );
};

export default About;
