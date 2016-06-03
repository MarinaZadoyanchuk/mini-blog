import React from 'react';
import {Input, Button} from 'react-bootstrap';


const CreatePost = React.createClass({
  onClick() {
    this.props.onCreatePost( this.titleInput.getValue(),this.textInput.getValue(),this.props.currentUser);
   
  },
  render() {
    return (
        <section class="createPost">
          <Input
            type="text"
            placeholder="Enter title"
            label="Title"
            bsSize="medium"
            hasFeedback
            ref={ (ref) => this.titleInput = ref }
          />
          <Input
            type="textarea"
            placeholder="Enter text"
            label="Text"
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
})
  
export default CreatePost