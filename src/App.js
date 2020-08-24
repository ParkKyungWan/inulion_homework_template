//React
import React, { Component } from 'react';

//material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

//헤더,푸터
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

//css
import './App.css';



class App extends Component {
  
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header/>
          <Main/>
          <Footer/>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
