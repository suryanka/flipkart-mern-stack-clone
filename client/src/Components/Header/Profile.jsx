import styled from "@emotion/styled";
import { PowerSettingsNew } from "@material-ui/icons";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";

function Profile({ account , setAccount}) {
  const[ open, setOpen]= useState(false);
  const handleClick = (event)=>{
    setOpen(event.currentTarget);
  }

  const handleClose = ()=>{
    setOpen(false);
  }
  
  const Component= styled(Menu)`
  margin-top: 5px;
  `;

  const Text = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
  `;

  const logoutUser=()=>{
    setAccount('');
  }
  return (
    <>
      <Box onClick={handleClick} style={{ cursor: 'pointer'}}>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
      </Box>

      <Component
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> {handleClose(); logoutUser();}}>
          <PowerSettingsNew color="primary" fontSize="small"/>
          <Text>Logout</Text>
        </MenuItem>
      </Component>
    </>
  );
}

export default Profile;
