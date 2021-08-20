import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    custombg: props => ( {
    
    }),
   
});

export default function ClassesShorthand({children, type, ...props}) {
    const classes = useStyles(children,...props);
    
    return (
      <Card className={classes.root}>
            {children}
    </Card>
    );
}