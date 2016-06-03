import React from 'react';
import { Button } from 'react-bootstrap';


const createPost = React.createClass({
  onClick() {
      console.log("dsdsd");
  },
  render() {
    return (
        <Button
          bsStyle="primary"
          onClick={this.onClick}
        >
          CreatePost
        </Button>
    )
  }
})
  
export default createPost