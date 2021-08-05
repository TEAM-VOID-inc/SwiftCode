import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    custombg: props => ( {
    backgroundColor: props.bg,
    border: props.bd,
    color: props.color,
    height: props.h,
    width: props.w,
    fontSize: props.fs,
    margin: props.m,
    
    '&:hover': {
        backgroundColor: props.hoverbg === undefined ? props.bg : props.hoverbg,
        color: props.hovercolor === undefined ? props.color : props.hover,
    },
    }),
    
    gradientborder: {
    borderStyle: 'solid',
    borderWidth: '3px',
    borderImage: 'linear-gradient(45deg, #34ACE1, #6ABE45) 1',
    }
});

export default function ClassesShorthand({children, type, ...props}) {
    const classes = useStyles(props);
    
    return <Button variant="contained" color="primary" className={props.gradient === true ? ` ${classes.custombg} ${classes.gradientborder}` : classes.custombg}>{children}</Button>;
}