import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../Utils/common-utils";
import Buttongroup from "./Buttongroup";
import {useDispatch} from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
`;

const Remove= styled(Button)`
margin-top: 20px;
font-size: 16px;
color: #000;
font-weight: 600;
`;

function CartItem({ item }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    const dispatch= useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  }
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} style={{height: 110, width:110}} alt="product" />
        <Buttongroup/>
      </LeftComponent>
      <Box>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller: RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </Box>
        </SmallText>
        <Typography>
          <Box component="span" style={{ fontSize: 18, fontWeight:600 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388e3c" }}>
            {item.price.discount}
          </Box>
          &nbsp;&nbsp;&nbsp;
        </Typography>
        <Remove onClick={()=> removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
}

export default CartItem;
