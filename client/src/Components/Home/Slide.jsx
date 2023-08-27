import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #7f7f7f;
`;

const Dealtext = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 35px;
  line-height: 32px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;

const Image = styled.img`
  width: auto;
  height: 150px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

function Slide({ products, title, timer }) {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  // console.log(`Products from slide is: ${products}`);

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <Dealtext>{title}</Dealtext>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" style={{ width: "24px" }} />
            <Countdown
              date={Date.now() + 5.04e7}
              renderer={renderer}
            ></Countdown>
          </Timer>
        )}

        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>

      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products && products.map((product) => (
          <Link
            to={`products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ color: "#212121", fontWeight: 600 }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
}

export default Slide;
