import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: props=>({
    minWidth: props.minw,
    maxWidth: props.maxw,
    height: props.h,
    opacity: props.opacity,
    zIndex:props.z,
    margin:props.m,
    padding: props.p,
    backgroundColor: props.bg ,
    borderRadius: props.br ,
    border: props.bd,
    display: props.display ,
    alignItems: props.alignItems,
    justifyContent: props.justify,
    textAlign: props.textalign,
  }),
});

export default function ClassesShorthand({ children, type, ...props }) {
    const classes = useStyles(props);

    return (
        <Card className={classes.root} variant="outlined">
        {/* <CardContent> */}
            {children}
        {/* </CardContent> */}
      </Card>
    );
}

