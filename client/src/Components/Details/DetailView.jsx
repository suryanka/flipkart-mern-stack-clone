import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  getProducts,
} from "../../redux/actions/productActions";
import { Box, Grid, ThemeProvider, Typography, createTheme, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const theme = createTheme();
const Component = styled(Box)`
  background-color: #f2f2f2;
  margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#ffffff",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));
// `
//   background: #ffffff;
//   display: flex;
//   justify-content: space-between;
// `;

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;

function DetailView() {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  console.log("Product in details view is : ", product);

  useEffect(() => {
    dispatch(getProductDetails(id));
    // dispatch(getProducts());
  }, [dispatch, id]);
  return (
    <ThemeProvider theme={theme}>
      <Component>
        {product && Object.keys(product).length && (
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              <ProductDetail product={product} />
            </RightContainer>
          </Container>
        )}
      </Component>
    </ThemeProvider>
  );
}

export default DetailView;
