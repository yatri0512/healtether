import React from "react";
import {
   Box,
   Container,
   Divider,
   Typography,
   Button,
   Link,
} from "@mui/material";
import {
   Facebook,
   Favorite,
   Instagram,
   LinkedIn,
   Twitter,
} from "@mui/icons-material";
import Logo from "../Assets/logo.png";
const Footer = () => {
   return (
      <>
         <Box position="relative" padding="10px">
            <Divider
               margin="0px"
               flexShrink="0"
               borderWidth="0px 0px thin"
               borderStyle="solid"
               borderColor="rgba(145, 158, 171, 0.24)"
            />
            <Container
               maxWidth="lg"
               width="100%"
               marginLeft="auto"
               boxSizing="border-box"
               marginRight="auto"
               display="block"
               paddingLeft="16px"
               paddingRight="16px"
               paddingTop="40px"
               sx={{
                  "@media (max-width: 800px)": {
                     paddingLeft: "0px",
                     paddingRight: "0px",
                     paddingTop: "0px",
                  },
               }}>
               <Box
                  boxSizing="border-box"
                  display="flex"
                  flexFlow="wrap"
                  width="100%"
                  sx={{
                     "@media (max-width: 800px)": {
                        flexDirection: "column",
                     },
                  }}>
                  <Box
                     boxSizing="border-box"
                     margin="20px 50px 10px"
                     flexDirection="row"
                     flexBasis="100%"
                     flexGrow="0"
                     maxWidth="100%"
                     sx={{
                        "@media (max-width: 800px)": {
                           margin: "10px 25px 5px",
                           flexDirection: "column",
                           alignItems:'center',
                           justifyContent:'center'
                        },
                     }}>
                     <Box
                        lineHeight="1"
                        display="block"
                        overflow="hidden"
                        position="relative">
                        <Box
                           component="img"
                           src={Logo}
                           alt="Logo"
                           sx={{
                              display: {
                                 height: "90%",
                                 width: "80%",
                              },
                              "@media (max-width: 800px)": {
                                 height: "50%",
                                 width: "50%",
                              },
                           }}
                        />
                     </Box>
                     <Box
                        padding="10px"
                        sx={{
                           "@media (max-width: 800px)": {
                              padding: "5px",
                           },
                        }}>
                        <Typography
                           variant="p"
                           sx={{
                              margin: "0px",
                              lineHeight: "1.57143",
                              fontSize: "1rem",
                              fontWeight: "500",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                                 lineHeight: "1",
                              },
                           }}>
                           YORE Care is a Health-tech SUPER
                           APP to create an integrated
                           Health Web to Digitize, Preserve
                           records &amp; Empower the Care
                           Seeker.
                        </Typography>
                     </Box>
                     <Box
                        width="100%"
                        alignItems="center"
                        justifyContent={"center"}>
                        <Button
                           style={{
                              backgroundColor:
                                 "transparent",
                              border: "0px",
                              fontSize: "1.5rem",
                              padding: "8px",
                              color: "rgb(99, 115, 129)",
                           }}>
                           <Facebook />
                        </Button>
                        <Button
                           style={{
                              backgroundColor:
                                 "transparent",
                              border: "0px",
                              fontSize: "1.5rem",
                              padding: "8px",
                              color: "rgb(99, 115, 129)",
                           }}>
                           <Instagram />
                        </Button>
                        <Button
                           style={{
                              backgroundColor:
                                 "transparent",
                              border: "0px",
                              fontSize: "1.5rem",
                              padding: "8px",
                              color: "rgb(99, 115, 129)",
                           }}>
                           <LinkedIn />
                        </Button>
                        <Button
                           style={{
                              backgroundColor:
                                 "transparent",
                              border: "0px",
                              fontSize: "1.5rem",
                              padding: "8px",
                              color: "rgb(99, 115, 129)",
                           }}>
                           <Twitter />
                        </Button>
                     </Box>
                  </Box>
                  <Box
                     boxSizing="border-box"
                     margin="0px"
                     flexDirection="row"
                     flexBasis="60%"
                     flexGrow="0"
                     maxWidth="50%"
                     alignItems={"left"}
                     justifyContent={"left"}
                     sx={{
                        "@media (max-width: 800px)": {
                           maxWidth: "100%",
                           alignItems: "center",
                           justifyContent: "center",
                        },
                     }}>
                     <Box
                        display="flex"
                        flexDirection="column"
                        marginTop={"50px"}
                        alignItems={"left"}
                        justifyContent={"left"}
                        sx={{
                           "@media (max-width: 800px)": {
                              alignItems: "center",
                              justifyContent: "center",
                           },
                        }}>
                        <Typography
                           variant="h5"
                           sx={{
                              "@media (max-width: 800px)": {
                                 fontSize: "1rem",
                              },
                           }}>
                           YOUR CARE
                        </Typography>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                              },
                           }}
                           fontSize="0.9rem">
                           Partner
                        </Link>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                              },
                           }}
                           fontSize="0.9rem">
                           Blog
                        </Link>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                              },
                           }}
                           fontSize="0.9rem">
                           Contact
                        </Link>
                     </Box>
                  </Box>
                  <Box
                     boxSizing="border-box"
                     margin="0px"
                     flexDirection="row"
                     flexBasis="70%"
                     flexGrow="0"
                     maxWidth="50%"
                     sx={{
                        "@media (max-width: 800px)": {
                           maxWidth: "100%",
                        },
                     }}>
                     <Box
                        display="flex"
                        flexDirection="column"
                        marginTop={"50px"}
                        alignItems={"left"}
                        justifyContent={"left"}
                        sx={{
                           "@media (max-width: 800px)": {
                              alignItems: "center",
                              justifyContent: "center",
                           },
                        }}>
                        <Typography
                           variant="h5"
                           sx={{
                              "@media (max-width: 800px)": {
                                 fontSize: "1rem",
                              },
                           }}>
                           LEGAL
                        </Typography>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                              },
                           }}
                           fontSize="0.9rem">
                           Terms of Services
                        </Link>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                              },
                           }}
                           fontSize="0.9rem">
                           Privacy Policy
                        </Link>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                              },
                           }}
                           fontSize="0.9rem">
                           Return & Refund Policy
                        </Link>
                     </Box>
                  </Box>
                  <Box
                     boxSizing="border-box"
                     margin="0px"
                     flexDirection="row"
                     flexBasis="60%"
                     flexGrow="0"
                     maxWidth="50%"
                     sx={{
                        "@media (max-width: 800px)": {
                           maxWidth: "100%",
                           alignItems: "center",
                           justifyContent: "center",
                           textAlign: "center",
                        },
                     }}>
                     <Box
                        display="flex"
                        flexDirection="column"
                        marginTop={"50px"}
                        alignItems={"left"}
                        justifyContent={"left"}
                        sx={{
                           "@media (max-width: 800px)": {
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              textAlign: "center",
                           },
                        }}>
                        <Typography
                           variant="h5"
                           sx={{
                              "@media (max-width: 800px)": {
                                 fontSize: "1rem",
                              },
                           }}>
                           CONTACT
                        </Typography>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                              },
                           }}
                           fontSize="0.9rem">
                           hello@yorecare.com
                        </Link>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                              },
                           }}
                           fontSize="0.9rem">
                           7420994331
                        </Link>
                        <Link
                           sx={{
                              color: "black",
                              padding: "2px",
                              textDecoration: "none",
                              "@media (max-width: 800px)": {
                                 fontSize: "0.7rem",
                                 width: "50%",
                              },
                           }}
                           fontSize="0.9rem">
                           B/106-107, Parmanand, Ashok
                           Nagar, Ambadi Rd, Vasai West,
                           Maharashtra 401202
                        </Link>
                     </Box>
                  </Box>
               </Box>
               <Box>
                  <Typography
                     variant="p"
                     sx={{
                        "@media (max-width: 800px)": {
                           fontSize: "0.5rem",
                        },
                     }}>
                     © 2023. All rights reserved by
                     <Typography
                        variant="span"
                        href="https://adsindia.tech/"
                        target="blank">
                        Advance Digital Solutions.
                     </Typography>
                     Made with
                     <Favorite
                        sx={{
                           color: "red",
                           fontSize: "large",
                           padding: "1px",
                           "@media (max-width: 800px)": {
                              fontSize: "10px",
                           },
                        }}
                     />
                     In India
                  </Typography>
               </Box>
            </Container>
         </Box>
      </>
   );
};

export default Footer;
