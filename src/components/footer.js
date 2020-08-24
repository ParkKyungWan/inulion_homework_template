import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'madeby © '}
        <Link color="inherit" href="https://github.com">
          이름 적기, 깃허브 연결하기
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      textAlign:'end'
    },
  }));
  
function Footer(props) {
    const classes = useStyles();
    return (
        
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">
              designed with <b>'material-ui'</b>
              <Link color="inherit" href="https://material-ui.com/"> @reference</Link>
            </Typography>
            <Copyright />
          </Container>
        </footer>
    );
}

export default Footer;