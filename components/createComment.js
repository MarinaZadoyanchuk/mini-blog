import React from 'react';
import {Input, Button} from 'react-bootstrap';

const CommentForm = React.createClass({
    getInitialState() {
      return {
        text: ''
      }
    },
    onClick() {
      this.props.onCreateComment(this.textInput.getValue(), this.props.currentUser, this.props.currentPost);
      this.setState(this.getInitialState());
    },
    onChange() {
      this.setState({
        text: this.textInput.getValue()
      })
    },
    render() {
      return (
        <section className="addComment">
            <form>
              <Input
                type="textarea"
                value={this.state.text}
                placeholder="Enter comment"
                bsSize="medium"
                onChange={this.onChange}
                hasFeedback
                ref={ (ref) => this.textInput = ref }
              />
              < Button
                bsStyle = "primary"
                onClick={this.onClick}
                >
                Add Comment
                </Button> 
              </form>
        </section>
      )
    }
});

export default CommentForm;