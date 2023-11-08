import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PropertiImg1 from "../../Assets/propertieimg1.png";
import PropertiImg2 from "../../Assets/propertieimg2.png";
import PropertiImg3 from "../../Assets/propertieimg3.png";
const homePage6 = () => {
   return (
      <Container maxWidth="lg">
         <Box
            display="grid"
            gridTemplateColumns={
               "25% 25% 25%"
            }
            columnGap={5}
            margin="80px auto auto"
            width="100%"
            paddingBottom="10%"
            alignItem="center"
            justifyContent="center"
            sx={{
               "@media (max-width: 800px)": {
                  gridTemplateColumns:"100%"
               },
            }}>
            <Box
               boxSizing="border-box"
               margin="2px"
               width='100%'
               flexDirection="row">
               <Box
                  color="rgb(33, 43, 54)"
                  borderRadius="16px"
                  display="flex"
                  margin="0"
                  width="100%"
                  alignItems="center"
                  justifyContent="space-between"
                  border="1px solid rgb(77, 49, 215)"
                  padding="8px 8px 8px 12px">
                  <Typography
                     fontsize="2rem"
                     fontWeight="bold">
                     Convenience
                  </Typography>
                  <Box
                     width="96px"
                     height="96px"
                     borderRadius="50%"
                     backgroundColor="rgb(244, 246, 248)">
                     <Box
                        component="img"
                        src={PropertiImg1}
                        alt=" "
                        style={{
                           width: "100%",
                           height: "100%",
                           backgroundSize:
                              "cover !important",
                        }}
                     />
                  </Box>
               </Box>
            </Box>
            <Box
               boxSizing="border-box"
               margin="2px"
               width='100%'
               flexDirection="row">
               <Box
                  color="rgb(33, 43, 54)"
                  borderRadius="16px"
                  display="flex"
                  margin="0"
                  width="100%"
                  alignItems="center"
                  justifyContent="space-between"
                  border="1px solid rgb(77, 49, 215)"
                  padding="8px 8px 8px 12px">
                  <Typography
                     fontWeight="bold"
                     fontsize="2rem">
                     Accessibility
                  </Typography>
                  <Box
                     width="96px"
                     height="96px"
                     borderRadius="50%"
                     backgroundColor="rgb(244, 246, 248)">
                     <Box
                        component="img"
                        src={PropertiImg2}
                        alt=" "
                        style={{
                           width: "100%",
                           height: "100%",
                           backgroundSize:
                              "cover !important",
                        }}
                     />
                  </Box>
               </Box>
            </Box>
            <Box
               boxSizing="border-box"
               margin="2px"
               width='100%'
               flexDirection="row">
               <Box
                  color="rgb(33, 43, 54)"
                  borderRadius="16px"
                  display="flex"
                  alignItems="center"
                  margin="0"
                  width="100%"
                  justifyContent="space-between"
                  border="1px solid rgb(77, 49, 215)"
                  padding="8px 8px 8px 12px">
                  <Typography
                     fontWeight="bold"
                     fontsize="2rem">
                     Security
                  </Typography>
                  <Box
                     width="96px"
                     height="96px"
                     borderRadius="50%"
                     backgroundColor="rgb(244, 246, 248)">
                     <Box
                        component="img"
                        src={PropertiImg3}
                        alt=" "
                        style={{
                           width: "100%",
                           height: "100%",
                           backgroundSize:
                              "cover !important",
                        }}
                     />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Container>
   );
};

export default homePage6;
