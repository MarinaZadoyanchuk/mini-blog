import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

const Header = ({onLogout, onGoToCreatePostPage}) => {
  return (
    <header>
      <ButtonToolbar>
        <Button
          bsStyle="primary"
          onClick={onLogout}>
          Log out
        </Button>
        <Button 
          onClick={onGoToCreatePostPage}>
          Create Post
        </Button>
      </ButtonToolbar>
    </header>
  )
}

export default Header;