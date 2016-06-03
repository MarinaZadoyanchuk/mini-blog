import React, { PropTypes } from 'react';
import {Input, Button} from 'react-bootstrap';


const Login = React.createClass({
    onClick() {
      this.props.onLogin(this.loginInput.getValue());
    },
    render() {
      return (
        <div>
          <Input
            type="text"
            placeholder="Enter login"
            label="Login"
            bsSize="medium"
            hasFeedback
            ref={ (ref) => this.loginInput = ref }
          />
          <Button
            bsStyle="primary"
            onClick={this.onClick}>
            Log in
          </Button>
        </div>
      )
    }
})

Login.PropsTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login;

