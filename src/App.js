import React from 'react'; // import react

class App extends React.Component {
constructor() {
  super();
  this.state = {
    text: 'this is the state text',
  }
}
  update(event) { // update text event
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
      <h1>{this.state.text}</h1>
      <Title update={this.update.bind(this)}/>
      <Title update={this.update.bind(this)}/>
      <Title update={this.update.bind(this)}/>
      </div> 
    )
  }
}

const Title = (props) => // Title new component
  <input type="text" onChange={props.update}/> // update props

export default App // export App component