import React from 'react'; // import react

class App extends React.Component {
constructor() {
  super();
  this.state = {
    text: 'this is the state text',
    number: 0
  }
}
  update(event) {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
      <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.text} - {this.state.number}</h1>
      </div>
    )
  }
}

export default App // export App component