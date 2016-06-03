import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

const Header = ({onLogout, onGoToPage}) => {
  return (
    <header>
      <ButtonToolbar>
        <Button
          bsStyle="primary"
          onClick={onLogout}>
          Log out
        </Button>
        <Button 
          onClick={() => {onGoToPage('go_to_create_post')}}>
          Create Post
        </Button>
        <Button
          filter="SHOW_ALL"
          onClick={() => {onGoToPage('all_posts')}}
        >
          All posts
        </Button>
        <Button
          filter="SHOW_OWN"
          onClick={() => {onGoToPage('own_posts')}}
        >
          Only own posts
        </Button>
      </ButtonToolbar>
    </header>
  )
}

export default Header;