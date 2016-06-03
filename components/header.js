import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

const Header = ({onLogout, onGoToPage}) => {
  return (
    <header className="mainHeader">
      <ButtonToolbar className="nav-buttons">
        <Button
          filter="SHOW_ALL"
          onClick={() => {onGoToPage('home')}}
        >
          Home
        </Button>
        <Button
          onClick={() => {onGoToPage('go_to_create_post')}}>
          Create Post
        </Button>
        <Button
          filter="SHOW_OWN"
          onClick={() => {onGoToPage('own_posts')}}
        >
          Only own posts
        </Button>
        <Button
          onClick={onLogout}>
          Log out
        </Button>
      </ButtonToolbar>
    </header>
  )
}

export default Header;