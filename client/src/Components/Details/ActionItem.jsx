import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
import { ShoppingCart, FlashOn } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../services/api";
import { post } from "../../Utils/paytm";

const theme = createTheme();

// const LeftContainer = styled(Box)(({theme} )=> ({
//   minWidth: '40%',
//   padding: '40px 0 0 80px',
//   [theme.b.down('lg')]: ({
//     padding:'20px 40px',
//   })
// }))
// minWidth: '40%',
//   padding:'40px 0 0 80px',

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  width: "90%",
  padding: "15px",
});

const StyleButton = styled(Button)(({ theme }) => ({
  width: "46%",
  height: "50px",
  borderRadius: "2px",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

function ActionItem({ product }) {
  const quantity = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id}= product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async ()=> {
    let response= await payUsingPaytm({amount: 500, email:'codeDodo@gmail.com'});
    let information= {
      action: 'http://securegw-stage.paytm.in/order/process',
      params: response,
    }
    post(information);
  }
  return (
    <ThemeProvider theme={theme}>
      <LeftContainer>
        <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
          <Image src={product.detailUrl} />
        </Box>

        <StyleButton
          variant="contained"
          style={{ marginRight: "10px", background: "#ff9f00" }}
          onClick={addItemToCart}
        >
          <ShoppingCart />
          Add to Cart
        </StyleButton>
        <StyleButton variant="contained" onClick={()=> buyNow()} style={{ background: "#fb541b" }}>
          <FlashOn />
          Buy Now
        </StyleButton>
      </LeftContainer>
    </ThemeProvider>
  );
}

export default ActionItem;
