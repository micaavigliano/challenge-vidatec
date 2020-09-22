import React from 'react';
//Importo todos los elementos de material ui necesarios para el header 
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    linkHome: {
        color: "white",
        '&focus': {
            outline: "2px solid white"
        }
    }
}))


const Header = () => {
    const classes = useStyles()
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <Link to="/" className={classes.linkHome}>
                            MoviesDB searcher
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;