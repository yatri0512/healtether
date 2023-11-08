import React, { useState } from "react";
import {
   ArrowDropDown,
   ArrowDropUp,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function QuestionCard(props) {
   const [isOpen, setIsOpen] = useState(false);
   const toggleIsOpen = () => {
      setIsOpen(!isOpen);
   };
   return (
      <>
         <Box
            sx={{
               height: "inherit",
               border: "1px solid rgb(231, 231, 231)",
               borderRadius: "10px",
               padding: "4.5vh",
               width: "80%",
               boxSizing: "border-box",
               boxShadow: "4px 4px 4px gray",
               cursor: "pointer",
               "@media (max-width: 800px)": {
                  padding: "1vh",
                  width: "90%",
               },
            }}
            onClick={toggleIsOpen}>
            <Box
               style={{
                  display: "flex",
                  justifyContent: "space-between",
               }}>
               <Typography
                  variant="h6"
                  sx={{
                     "@media (max-width: 800px)": {
                        fontSize: "18px",
                     },
                  }}>
                  {props.ques}
               </Typography>
               {isOpen ? (
                  <ArrowDropDown />
               ) : (
                  <ArrowDropUp />
               )}
            </Box>
            {isOpen && (
               <Typography
                  variant="p"
                  sx={{
                     "@media (max-width: 800px)": {
                        fontSize: "14px",
                     },
                  }}>
                  {props.ans}
               </Typography>
            )}
         </Box>
      </>
   );
}
