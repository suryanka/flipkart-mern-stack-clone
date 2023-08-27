import React, { useEffect } from "react";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Container = styled(Box)`
  padding: 10px 10px;
  background-color: #f2f2f2;
`;

function Home() {

  const { products } = useSelector(state => state.getProducts);
  console.log(products);

  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <MidSlide products={products} title="Deal of the day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for you" timer={false}/>
        <Slide products={products} title="Suggested Items" timer={false}/>
        <Slide products={products} title="Top Collections" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's top picks" timer={false}/>
        <Slide products={products} title="Top deal on accessories" timer={false}/>
      </Container>
    </>
  );
}

export default Home;
