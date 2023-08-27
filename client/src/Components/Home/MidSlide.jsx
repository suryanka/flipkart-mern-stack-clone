import { Box, ThemeProvider, createTheme, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const theme = createTheme();

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({theme})=>({
  width: '83%',
  [theme.breakpoints.down('md')]:{
    width:'100%',
  }
}));


const RightComponent = styled(Box)(({theme}) =>({
  background: '#ffffff',
  padding: '5px',
  marginTop: '10px',
  marginLeft: '10px',
  width: '17%',
  teaxtAlign: 'center',
  [theme.breakpoints.down("md")]:{
    display:'none',
  }
}));

function MidSlide({ products, title, timer }) {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <ThemeProvider theme={theme}>
      <Component>
        <LeftComponent>
          <Slide products={products} title={title} timer={timer} />
        </LeftComponent>
        <RightComponent>
          <img src={adURL} alt="advertisement url" style={{ width: "201px" }} />
        </RightComponent>
      </Component>
    </ThemeProvider>
  );
}

export default MidSlide;
