import { Badge, Box, Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import { ShoppingCart } from "@material-ui/icons";
import styled from "@emotion/styled";
import {Link} from 'react-router-dom';

//components
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const theme= createTheme();

const Wrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  margin: '0 3% 0 auto',
  '& > button , & > p , & > div': {
    marginRight: '40px',
    fontSize: '14px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]:{
    display:'none',
    display:'block',
  }
}))

// `
//   display: flex;
//   margin: 0 3% 0 auto;
//   & > button,
//   & > p,
//   & > div {
//     margin-right: 40px;
//     font-size: 14px;
//     align-items: center;
//   }
// `;

const Container = styled(Link)(({theme})=>({
  display:'flex',
  color:'inherit',
  textDecoration: 'none',
  
}));

// `
//   display: flex;
// `;

const LoginButton = styled(Button)`
  background-color: #fff;
  color: #2874f0;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;
function CustomButton() {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const { account , setAccount } = useContext(DataContext);

  const { cartItems } = useSelector(state => state.cart);

  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount}/>
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: "3px" }}>Become a Seller</Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>

      <Container to="/cart">
        <Badge  badgeContent={cartItems.length} color="secondary">
        <ShoppingCart />
        </Badge>
        <Typography style={{marginLeft: '10px'}}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
    </ThemeProvider>
  );
}

export default CustomButton;
