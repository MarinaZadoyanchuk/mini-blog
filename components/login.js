import React, { PropTypes } from 'react';
import {Input, Button} from 'react-bootstrap';


const Login = React.createClass({
    getInitialState() {
      return {
        allowLogin: false
      }
    },
    handleChange(e) {
      if (this.loginInput.getValue().length > 2) {
        this.setState({
          allowLogin: true
        })
      } else {
        this.setState({
          allowLogin: false
        })
      }
    },  
    onClick() {
      this.props.onLogin(this.loginInput.getValue());
    },
    render() {
      return (
        <section className="loginForm">
          <h1>Login page</h1>
          <Input
            type="text"
            placeholder="Enter login"
            className="loginInput"
            bsSize="medium"
            hasFeedback
            onChange={this.handleChange}
            ref={ (ref) => this.loginInput = ref }
          />
          <Button
            bsStyle="primary"
            onClick={this.state.allowLogin ? this.onClick : null}
            disabled={!this.state.allowLogin}
          >
            Log in
          </Button>
        </section>
      )
    }
})

Login.PropsTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login;

