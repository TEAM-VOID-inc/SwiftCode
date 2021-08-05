import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles({
    simple: props => ({
        fontSize: props.fs === undefined ? 100 : props.fs,
        fontWeight: props.fw === undefined ? 400 : props.fw,
        color: props.color === undefined ? "white" : props.color,
        margin: props.m,
    }),
    gradient:{
        background: "-webkit-linear-gradient(45deg, #34ACE1, #6ABE45)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
});


export default function ClassesShorthand({children,  ...props}) {
    const classes = useStyles(props)
    
    return <Typography className={ props.gradient !== undefined ? `${classes.gradient} ${classes.simple}` : classes.simple}>{children}</Typography>;
}