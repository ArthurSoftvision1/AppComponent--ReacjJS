import React from 'react'; // import react
import ReactDOM from 'react-dom'; // import the react-dom

class App extends React.Component {
  constructor() {
    super();
    this.state = {increasing: false} // set default state by false
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val+1}/>, // increase the val by 1
      document.getElementById('root')) // root container ID
  }

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0; // render the val just if is multiple of 5
  }

  render() {
    console.log(this.state.increasing) // display increasing
    return (
      // on clock update the value
      <button onClick={this.update.bind(this)}> 
        {this.props.val} 
      </button>
    )
  }

  componentDidUpdate(prevProps, prevState) {
      console.log(`prevProps: ${prevProps.val}`) // display previous props
  }
}

App.defaultProps = {val: 0} // default prop value

export default App // export Wrapper component