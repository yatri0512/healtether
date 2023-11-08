import React from "react";
import {
   Container,
   Box,
   Button,
   Typography,
} from "@mui/material";
import { East } from "@mui/icons-material";
const homePage1 = () => {
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
               ABHA ID YOUR UNIQUE & TRUSTABLE HEALTH ID
            </Typography>
            <Typography
               padding={"3%"}
               variant="h3"
               sx={{
                  width: "90%",
                  fontWeight: "800",
                  lineHeight: "1.33333",
                  "@media (max-width: 800px)": {
                     fontSize: "30px",
                  },
                  "@media (max-width: 600px)": {
                     fontSize: "20px",
                  },
               }}>
               Unlock India's Digital Health Ecosystem with
               Seamless Access
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
               Create your ABHA ID on the YORE Care app and
               manage your health anytime, anywhere in
               India.
            </Typography>

            <Box>
               <Button
                  variant="contained"
                  color="success"
                  size='small'
                  style={{
                     margin: "10px",
                     fontWeight: "bold",
                  }}>
                  Create Abha <East />
               </Button>
               <Button
                  variant="contained"
                  size='small'
                  style={{
                     margin: "10px",
                     color: "black",
                     border: "2px solid black",
                     backgroundColor: "white",
                     fontWeight: "bold",
                  }}>
                  Know More
               </Button>
            </Box>
         </Box>
      </Container>
   );
};

export default homePage1;
