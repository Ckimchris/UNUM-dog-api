import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FeedItem extends Component {
  render() {
    let url = this.props.urls;
    return (
    <div>
        <Card>
            <CardHeader
                title="Dog.CEO"
                subtitle="Shiba"
            />
            <CardMedia>
                <img src = {this.props.url}/>
            </CardMedia>
        </Card>
        <br></br>
    </div>
    );
  }
}

export default FeedItem;

