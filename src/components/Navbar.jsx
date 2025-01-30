import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                <i className="bi bi-instagram"></i> Instagram Clone
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Navbar;
