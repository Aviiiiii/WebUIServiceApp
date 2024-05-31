// src/AppBarComponent.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
`;

const AppBarComponent = ({ title }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBarComponent;
