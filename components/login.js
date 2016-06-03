import React, { PropTypes } from 'react';
import {Input, Button} from 'react-bootstrap';


const Login = React.createClass({
    onClick() {
      this.props.onLogin(this.loginInput.getValue());
    },
    render() {
      return (
        <form>
          <Input
            type="text"
            placeholder="Enter login"
            minlength="5"
            required
            label="Login"
            bsSize="medium"
            hasFeedback
            pattern=".{3,}"
            required="required"
            ref={ (ref) => this.loginInput = ref }
          />
          <Button
            bsStyle="primary"
            onClick={this.onClick}>
            Log in
          </Button>
        </form>
      )
    }
})

Login.PropsTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login;

