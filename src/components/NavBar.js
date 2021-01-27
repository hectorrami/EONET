import React from 'react'
import { Toolbar, AppBar, makeStyles, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'black',
    },
    appbar: {
        background: 'white',
    },
    text: {
        textAlign: 'right',
        color: "white"
    }
}));


const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar variant="dense">
                    <Typography variant="h6" className={classes.title}>Wildfire Tracker</Typography>
                    <Link variant="h6" href="https://eonet.sci.gsfc.nasa.gov/">
                        API
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;


