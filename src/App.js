import React from 'react'; // import react
import ReactDOM from 'react-dom';


class App extends React.Component {

  constructor() {
    super() //to get our context
    this.state = {val: 0} // set initial state
    this.update = this.update.bind(this)
  }

  update() {
    this.setState({val: this.state.val + 1}) // increment the state
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  render() {
    console.log('render');
    return <button onClick={this.update}>{this.state.val} </button>
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnMount() {
    console.log('componentWillUnMount')
  }
}

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  
  unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unMount.bind(this)}>UnMount</button>
        <div id="a"> </div>
      </div>
    )
  }
}

export default Wrapper // export Wrapper component