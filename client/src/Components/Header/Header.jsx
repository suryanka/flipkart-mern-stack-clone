import React, { useState } from "react";

//material ui
import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import styled from "@emotion/styled";

//component
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";

const theme = createTheme();

function Header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
    line-height: 0;
  `;
  const BoxComponent = styled(Link)`
    margin-left: 12%;
  `;
  const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
  `;

  const PlusImage = styled.img`
    width: 10px;
    height: 10px;
    margin-left: 4px;
  `;

  // const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  //   margin: '0px auto 0px 20px',
  //   [theme.breakpoints.down('md')]:{
  //     display:'none'
  //   }
  // }));

  const MenuButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => {
    <Box style={{ width: "200px" }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButton />
        </ListItem>
      </List>
    </Box>;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="header">
        <StyledHeader>
          <Toolbar
            style={{
              minHeight: "55px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <MenuButton color="inherit" onClick={handleOpen}>
              <Menu />
            </MenuButton>

            <Drawer
              open={open}
              onClose={handleClose}
              
            >
              {/* {list()} */}
              <Box style={{ width: "200px" }} onClick={handleClose}>
                <List>
                  <ListItem button>
                    <CustomButton />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
            <BoxComponent
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={logoURL} alt="logo" style={{ width: 75 }} />
              <Box style={{ display: "flex" }}>
                <SubHeading>
                  Join{" "}
                  <Box component="span" style={{ color: "#FFE500" }}>
                    Plus
                  </Box>
                </SubHeading>
                <PlusImage src={subURL} alt="sub-logo" />
              </Box>
            </BoxComponent>

            <Search />
            {/* <CustomButtonWrapper>
              <CustomButton />
            </CustomButtonWrapper> */}
            <CustomButton />
          </Toolbar>
        </StyledHeader>
      </div>
    </ThemeProvider>
  );
}

export default Header;
