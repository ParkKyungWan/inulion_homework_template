import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  
}));

export default function Header() {
  const classes = useStyles();
  
  const sections = [
    { title: 'one', url: '/1',},
    { title: 'two', url: '/2' },
    { title: 'three', url: '/3' },
    { title: 'four', url: '/4' },
    { title: 'five', url: '/5' },
    { title: 'six', url: '/6' },
    { title: 'seven', url: '/7' },
    { title: 'eight', url: '/8' },
    { title: 'nine', url: '/9' },
  ];
 

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link 
            color="inherit"
            href='/'
            underline='none'
          >
            멋.사와 React 과제
          </Link>
        </Typography>

      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};