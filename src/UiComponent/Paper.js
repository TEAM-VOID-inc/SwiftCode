import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: props =>({
    display: 'flex',
    flexWrap: 'wrap',
  }),
  paperRoot: props => ({
    border: props.bd,
    borderRadius: props.br,
    padding: props.p,
    backgroundColor:props.bg,
  }),

});

export default function ClassesShorthand({ children, square , variant, elevation, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot} variant={variant} elevation={elevation} square={square} >{children}</Paper>
    </div>
  );
}