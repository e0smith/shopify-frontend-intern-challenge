import './styling/App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/nasa'
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Info from './components/pages/Info';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

  componentDidMount(){
    this.props.getData()
  }

  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/info' exact component={Info} />
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
