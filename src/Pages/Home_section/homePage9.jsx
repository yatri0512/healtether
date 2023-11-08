import React from "react";
import { Container, Box, Typography } from "@mui/material";
const homePage9 = () => {
   return (
      <Container maxWidth="lg">
         <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            marginBottom="40px"
            alignItems="center"
            justifyContent={"center"}>
            <Typography
               variant="p"
               sx={{
                  lineHeight: "1.5",
                  textTransform: "uppercase",
                  color: "rgb(27, 156, 125)",
                  margin: "auto",
                  background: "rgb(241, 255, 243)",
                  padding: "12px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: "700",
                  "@media (max-width: 800px)": {
                     fontSize: "20px",
                     padding: "0px",
                  },
                  "@media (max-width: 600px)": {
                     fontSize: "10px",
                  },
               }}>
               STAY TUNED: SOMETHING AMAZING IS COMING!
            </Typography>
            <Typography
               padding={"3%"}
               variant="h3"
               sx={{
                  width: "90%",
                  fontWeight: "800",
                  lineHeight: "1.33333",
                  color: "green",

                  "@media (max-width: 800px)": {
                     fontSize: "30px",
                  },
                  "@media (max-width: 600px)": {
                     fontSize: "20px",
                  },
               }}>
               Healtether{" "}
               <Typography variant="span" color="black">
                  app
               </Typography>
            </Typography>
            <Typography
               variant="p"
               sx={{
                  width: "90%",
                  lineHeight: "1.5",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  fontFamily: "nunito",
                  "@media (max-width: 800px)": {
                     fontSize: "1rem",
                  },
                  "@media (max-width: 600px)": {
                     fontSize: "0.8rem",
                  },
               }}>
               “The more you empower, more is the value you
               can create” We always strive to empower the
               care seeker so as to extract more value and
               benefits out of the existing ecosystem.
            </Typography>
         </Box>
      </Container>
   );
};

export default homePage9;
