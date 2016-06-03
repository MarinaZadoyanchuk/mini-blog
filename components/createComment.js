import React from 'react';
import {Input, Button} from 'react-bootstrap';

const CommentForm = React.createClass({
    onClick() {
      this.props.onCreateComment(this.textInput.getValue(), this.props.currentUser, this.props.currentPost);
    },
    render() {
      return (
        <section>
          <h1>Your comment</h1>
          <Input
            type="textarea"
            placeholder="Enter comment"
            bsSize="medium"
            maxlength="140"
            hasFeedback
            ref={ (ref) => this.textInput = ref }
          />
          <Button
            bsStyle="primary"
            onClick={this.onClick}
          >
            CreatePost
          </Button>
        </section>
      )
    }
});

export default CommentForm;