import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions/nasa'
import PhotoCard from './components/Card';


class App extends Component {
  componentDidMount(){
    this.props.getData()
  }


    state = {
      like: 0
    }

  handleChange = (event) => {
    this.setState({like: event.target.value})
  }

  render(){
    return(
      <div className="cards">
        {this.props.photos.map((photo) => (<PhotoCard photo={photo} />))}
      </div>
       )
  }
}
const mapStateToProps = (state) => {
  return{
    photos: state.photos,
    loading: state.loading
  }
}
export default connect(mapStateToProps, { getData })(App);
