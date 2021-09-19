import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/nasa'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

  componentDidMount(){
    this.props.getData()
  }

  render(){
    return (
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    photos: state.photos,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getData })(App);
