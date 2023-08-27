import React from "react";

import Carousel from "react-multi-carousel";
import { bannerData } from "../../Constants/data";
import styled from "@emotion/styled";
import "react-multi-carousel/lib/styles.css";
import { ThemeProvider, createTheme} from "@mui/material";


const theme = createTheme();

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled('img')(({theme}) => ({
  width: '100%',
  height: '280px',
  [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height: 180
  }
}));


function Banner() {
  return (
    <ThemeProvider theme={theme}>
      <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((data) => (
        <Image src={data.url} alt="banner" />
      ))}
    </Carousel>
    </ThemeProvider>
    
  );
}

export default Banner;
