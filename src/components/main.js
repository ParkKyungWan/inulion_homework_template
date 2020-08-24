import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

//페이지들
import Home from '../homeworks/home';
import one from '../homeworks/one';
import two from '../homeworks/two';
import three from '../homeworks/three';
import four from '../homeworks/four';
import five from '../homeworks/five';
import six from '../homeworks/six';
import seven from '../homeworks/seven';
import eight from '../homeworks/eight';
import nine from '../homeworks/nine';

const useStyles = makeStyles({
    root: {
      marginTop: '40px',
      marginBottom: '40px',
      minHeight:'750px',
    },
  });

export default function Main() {
    
    const classes = useStyles();

    return(
        <Paper variant="outlined" className={classes.root} square>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/1" component={one}/>
                <Route path="/2" component={two}/>
                <Route path="/3" component={three}/>
                <Route path="/4" component={four}/>
                <Route path="/5" component={five}/>
                <Route path="/6" component={six}/>
                <Route path="/7" component={seven}/>
                <Route path="/8" component={eight}/>
                <Route path="/9" component={nine}/>
              </Switch>
            </Router>
        </Paper>
    );
}