import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
  } from "@mui/material";

function Appbar({drawerWidth}) {
  return <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#fefefe",
          color: "black",
        }}
      >
        <Toolbar>
          <Typography
            color="textSecondary"
            variant="span"
            sx={{
                fontSize:"20px",
              flexGrow: 1,
            }}
          >
            Here is your note
          </Typography>

          <Typography
            color="textSecondary"
            variant="h7"
            sx={{
              margin: "4px 10px",
              fontWeight: 100,
            }}
          >
            Subash
          </Typography>
          <Avatar alt="User" src="./user.png"></Avatar>
        </Toolbar>
      </AppBar>
  </>;
}

export default Appbar;
