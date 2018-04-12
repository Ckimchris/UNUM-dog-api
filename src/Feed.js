import React, { Component } from 'react';
import FeedItem from './FeedItem';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
    };
  }

  componentDidMount() {
    let xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = () => {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
            let data = JSON.parse(xhttp.responseText)
            this.setState({urls: data.message})        
		};
	  }
	xhttp.open("GET", this.props.url, true);
    xhttp.send();
  }

  render() {
    let testArray =[];
    for(let i = 0; i < this.state.urls.length; i++){
      testArray.push(<FeedItem url = {this.state.urls[i]} />)
    }
    return (
      <div>
        {testArray}
      </div>
    );
  }
}

export default Feed;