import { connect } from 'react-redux';
import LoginComponent from '../components/login';
import { login } from '../actions'

const mapStateToProps = (state) => state


const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (userName) =>  dispatch(login(userName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);