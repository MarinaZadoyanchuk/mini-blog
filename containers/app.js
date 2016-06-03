import { connect } from 'react-redux';
import AppComponent from '../components/app';
import { logout, goToCreatePostPage } from '../actions'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
    onGoToCreatePostPage: () => dispatch(goToCreatePostPage())
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default App;