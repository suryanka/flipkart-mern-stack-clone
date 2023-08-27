import React from "react";

import { navData } from "../../Constants/data";
import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";

const theme = createTheme();

const ParentComponent = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const ChildContainer = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box style={{ backgroundColor: "#ffffff" }}>
        <ParentComponent>
          {navData.map((data) => (
            <ChildContainer>
              <img src={data.url} style={{ width: 64 }}></img>
              <Text>{data.text}</Text>
            </ChildContainer>
          ))}
        </ParentComponent>
      </Box>
    </ThemeProvider>
  );
}

export default NavBar;
