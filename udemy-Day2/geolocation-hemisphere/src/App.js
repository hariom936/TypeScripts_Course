import React from "react";
import HemisphereDisplay from "./HemisphereDisplay";
// import  ReactDOM  from "react-dom";

class App extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = { latitude: null, errorMessage: '' }
  // }

  state = {latitude: null, errorMessage:''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (error) => {
        this.setState({ errorMessage: error.message })
      }
    );
  }

  // componentDidUpdate(){
  //   console.log('componentDiDUpdate')
  // }
  // componentWillUnmount(){
  //   console.log('componentWillUnmount')
  // }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          {this.state.errorMessage}
        </div>
      )
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
    }
    else{
      return <div>Loading... </div>
    }
  }
}

export default App;
