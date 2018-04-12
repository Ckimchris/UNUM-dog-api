import React, { Component } from 'react';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';

class FeedItem extends Component {
  render() {
    return (
    <div>
        <Card>
            <CardHeader
                title="Dog.CEO"
                subtitle="Shiba"
            />
            <CardMedia>
                <img src = {this.props.url} alt="feed images"/>
            </CardMedia>
        </Card>
        <br></br>
    </div>
    );
  }
}

export default FeedItem;

