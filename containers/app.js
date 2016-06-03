import { connect } from 'react-redux';
import AppComponent from '../components/app';
import { logout, goToPage, showPost } from '../actions'



const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
    onGoToPage: (pageName) => dispatch(goToPage(pageName))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

export default App;