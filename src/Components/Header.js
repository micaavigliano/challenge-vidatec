import React from 'react';
//Importo todos los elementos de material ui necesarios para el header 
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const Header = () => {
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        MoviesDB searcher
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;