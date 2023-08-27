import { Grid, Typography, styled, Box, Button, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TotalView from "./TotalView";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../services/api";
import { post } from "../../Utils/paytm";


const theme= createTheme();
const Container = styled(Grid)(({theme})=> ({
  padding: '35px 135px',
  [theme.breakpoints.down('sm')]:{
    padding: '15px 0px',
  }
}))
;
const Header = styled(Box)`
  padding: 35px 24px;
  background: #ffffff;
`;
const ButtonWrapper= styled(Box)`
  padding: 16px 22px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  box-shadow: 0 -2px 10px 0px rgb(0 0 0/10%);
`;

const StyledButton= styled(Button)`
  display: flex;
  margin-left: auto; 
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius:2px;
`;

const LeftComponent = styled(Grid)(({theme})=> ({
  paddingRight: '15px',
  [theme.breakpoints.down('md')]:{
    marginBottom: 15
  }
}));


function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  const buyNow = async ()=> {
    let response= await payUsingPaytm({amount: 500, email:'codeDodo@gmail.com'});
    let information= {
      action: 'http://securegw-stage.paytm.in/order/process',
      params: response,
    }
    post(information);
  }

  return (
    <ThemeProvider theme={theme}>'
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My cart({cartItems.length})</Typography>
            </Header>

            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
                <StyledButton onClick={()=> buyNow()}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart/>
      )}
    </>
    </ThemeProvider>
  );
}

export default Cart;
