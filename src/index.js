import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Feed from './Feed';
import { Grid, Row, Col } from 'react-flexbox-grid';

const url = 'https://dog.ceo/api/breed/shiba/images';

class App extends Component {
  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render (){
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={6} md={3}>
            </Col>
            <Col xs={6} md={6}>
              <Feed url = {url}/>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));