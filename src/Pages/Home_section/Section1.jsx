import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Apple } from "@mui/icons-material";
const Section1 = () => {
   return (
      <Box marginTop="80px">
         <Box
            padding="150px 150px"
            sx={{
               "@media (max-width: 800px)": {
                  padding: "100px 100px",
               },
            }}>
            <Box display="flex" width="100%">
               <Typography
                  variant="h2"
                  sx={{
                     "@media (max-width: 800px)": {
                        fontSize: "3rem",
                     },
                     "@media (max-width: 500px)": {
                        fontSize: "1.5rem",
                     },
                  }}>
                  Digitize, Preserve & Empower{" "}
                  <Typography
                     variant="span"
                     color="green"
                     sx={{
                        "@media (max-width: 800px)": {
                           fontSize: "3rem",
                        },
                        "@media (max-width: 500px)": {
                           fontSize: "1.5rem",
                        },
                     }}>
                     Healthcare
                  </Typography>
               </Typography>
            </Box>
            <Box
               width="80%"
               marginTop={"15px"}
               sx={{
                  "@media (max-width: 800px)": {
                     marginTop: "10px",
                     padding: "5px",
                  },
               }}>
               <Typography
                  variant="p"
                  lineHeight="1.57143"
                  fontSize="1.2rem"
                  fontWeight="400"
                  margin="auto"
                  sx={{
                     "@media (max-width: 800px)": {
                        fontSize: "1rem",
                     },
                     "@media (max-width: 500px)": {
                        fontSize: "0.6rem",
                     },
                  }}
                  fontFamily="nunito"
                  textAlign="left">
                  Your comprehensive online healthcare
                  solution, we provide 24x7 access to
                  personalized healthcare services, seamless
                  integration of health devices, and daily
                  health updates, all within a unified and
                  empowering ecosystem.
               </Typography>
            </Box>
            <Box>
               <Button
                  variant="contained"
                  color="success"
                  size="small"
                  style={{
                     margin: "10px",
                     fontWeight: "bold",
                  }}>
                  Play Store
               </Button>
               <Button
                  variant="contained"
                  size="small"
                  style={{
                     margin: "10px",
                     color: "black",
                     border: "2px solid black",
                     backgroundColor: "white",
                     fontWeight: "bold",
                  }}>
                  <Apple /> App Store
               </Button>
            </Box>
         </Box>
      </Box>
   );
};

export default Section1;
