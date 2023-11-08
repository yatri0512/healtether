import React, { useState } from "react";
import {
   Box,
   Container,
   Typography,
   Button,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import QuestionCard from "./questionCard";
const HomePage11 = () => {
   const [page, setPage] = useState(false);
   const Questions = [
      {
         ques: "What is YORE Care ?",
         ans: "YORE Care is a mobile application that allows users to create their ABHA ID, which is a secure and NHA (National Health Authority) approved identification for accessing healthcare services. YORE Care also provides various other features to enhance your healthcare experience",
      },
      {
         ques: "Is it safe to create an ABHA ID through the YORE Care app ?",
         ans: "Yes, it is completely safe to create an ABHA ID using the YORE Care app. We prioritize the security and privacy of our users. All data stored in the app is kept confidential and is not shared with anyone.",
      },
      {
         ques: "Can local media shops partner the YORE Care ?",
         ans: "Yes, YORE Care welcomes partnerships with local medical shops. By partnering with us, medical shops can provide convenient online medicine ordering services to their customers through our app. Click here to partner with us!",
      },
   ];
   const Questions11 = [
      {
         ques: "Does YORE Care charge any fee to medical shops that partner with them?",
         ans: "No, YORE Care does not charge any fees to medical shops that partner with us. We believe in fostering strong collaborations and making healthcare services easily accessible to everyone.",
      },
      {
         ques: "Can I order medicine online through YORE Care?",
         ans: "Absolutely! YORE Care allows you to conveniently order both prescribed and over-the-counter (OTC) medicines place your order for delivery to your doorstep. To order medicine now click here!",
      },
      {
         ques: "Will I receive the correct medicines if I order medicine through YORE Care?",
         ans: "Yes, when you place an order through YORE Care, we strive to ensure that you receive the correct medicines. We work closely with verified and trusted pharmacies to fulfill your orders accurately. Also, we have a team of pharmacists who double-check your order before confirming to minimize any potential errors.",
      },
   ];
   const Data = [
      {
         date: "05-02-2022",
         heading: "PARITOSH",
         description:
            "YORE Care App made my ABHA creation very easy. It is a user-friendly app that empowers you to take control of your healthcare journey like never before.",
      },
      {
         date: "10-10-2022",
         heading: "KETAKI",
         description:
            "I used the YORE Care app to make my ABHA ID. Now it is my go-to app. I have saved my health documents, and synced my health devices with it. Now I do not have to use multiple apps.",
      },
      {
         date: "04-07-2023",
         heading: "ANUJ",
         description:
            "I find YORE Care very helpful it's very easy for me to order medicine online from my local chemist. Their team of pharmacists is outstanding!",
      },
   ];
   const handleClick = () => {
      if (page === true) {
         setPage(false);
      } else {
         setPage(true);
      }
   };
   return (
      <>
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
                  Testimonial
               </Typography>
               <Typography
                  padding={"1%"}
                  variant="h6"
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
                  Checkout what people are saying about
                  their experiences.
               </Typography>
            </Box>
            <Box
               display="grid"
               gridTemplateColumns={"25% 25% 25%"}
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
               {Data.map((Val) => {
                  return (
                     <Box>
                        <Box
                           border="2px solid rgba(145, 158, 171, 0.12)"
                           display="block"
                           padding=" 20px 12px"
                           borderRadius="16px"
                           height="15rem"
                           boxShadow="rgba(50, 50, 91, 0.1) 0px 7px 29px 0px"
                           sx={{
                              ":hover": {
                                 boxShadow:
                                    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                              },
                              "@media (max-width: 800px)": {
                                 padding: " 10px 6px",
                              },
                           }}>
                           <Box height="90%">
                              <Typography
                                 variant="h6"
                                 fontWeight={700}>
                                 {Val.heading}
                              </Typography>
                              <Typography
                                 variant="p"
                                 fontSize="0.8rem"
                                 color="grey">
                                 {Val.date}
                              </Typography>
                              <Box display="flex">
                                 <Star
                                    style={{
                                       color: "orange",
                                       fontSize: "20px",
                                    }}
                                 />
                                 <Star
                                    style={{
                                       color: "orange",
                                       fontSize: "20px",
                                    }}
                                 />
                                 <Star
                                    style={{
                                       color: "orange",
                                       fontSize: "20px",
                                    }}
                                 />
                                 <Star
                                    style={{
                                       color: "orange",
                                       fontSize: "20px",
                                    }}
                                 />
                                 <Star
                                    style={{
                                       color: "orange",
                                       fontSize: "20px",
                                    }}
                                 />
                              </Box>
                              <Typography
                                 variant="h6"
                                 fontSize="0.9rem"
                                 marginTop="15px"
                                 height="50px"
                                 fontWeight={500}>
                                 {Val.description}
                              </Typography>
                           </Box>
                        </Box>
                     </Box>
                  );
               })}
            </Box>
            <Box
               display="flex"
               flexDirection="column"
               textAlign="center"
               marginBottom="40px"
               alignItems="center"
               justifyContent={"center"}>
               <Typography
                  padding={"1%"}
                  variant="h4"
                  sx={{
                     width: "90%",
                     fontWeight: "700",
                     "@media (max-width: 800px)": {
                        fontSize: "20px",
                        padding: "1%",
                     },
                  }}>
                  Frequency Ask Questions
               </Typography>
               <Box width="100%">
                  <Box
                     style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6vh",
                        "@media (max-width: 800px)": {
                           gap: "0.2vh",
                        },
                     }}>
                     {Questions.map((ar) => {
                        return (
                           <QuestionCard
                              ques={ar.ques}
                              ans={ar.ans}
                           />
                        );
                     })}
                     {page === true &&
                        Questions11.map((ar) => {
                           return (
                              <QuestionCard
                                 ques={ar.ques}
                                 ans={ar.ans}
                              />
                           );
                        })}
                  </Box>
               </Box>
               {page === false ? (
                  <Button
                     className="btn"
                     size="large"
                     style={{ fontWeight: "bold" }}
                     onClick={handleClick}>
                     View more
                  </Button>
               ) : (
                  <Button
                     className="btn"
                     size="large"
                     style={{ fontWeight: "bold" }}
                     onClick={handleClick}>
                     View Less
                  </Button>
               )}
            </Box>
         </Container>
      </>
   );
};

export default HomePage11;
