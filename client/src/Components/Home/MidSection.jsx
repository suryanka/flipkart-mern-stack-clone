import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { imageURL } from "../../Constants/data";
import styled from "@emotion/styled";

const theme = createTheme();

const Wrapper= styled(Grid)`
margin-top: 10px;
justify-content: space-between;
`;

const Image= styled('img')(({theme})=>({
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height: 120
    },
}));


function MidSection() {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <ThemeProvider theme={theme}>
      <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {imageURL.map((image) => (
          <Grid lg={4} md={4} sm={12} xs={12} item>
            <img src={image} alt="image" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
      <Image src={url} alt="image" style={{ width: '100%'}}/>
    </ThemeProvider>
  );
}

export default MidSection;
