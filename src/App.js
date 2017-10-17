import React from 'react'; // import react

class App extends React.Component {
  constructor() {
    super();
    this.state = {currentEvent: '__'} // default state
    this.update = this.update.bind(this)
  }

  update(event) { // update event function
    this.setState({currentEvent: event.type})
  }

  render() {
    return (
      <div>
        <textarea
          onKeyPress={this.update} // onKeyPress update the state
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="30" />
          <h1>{this.state.currentEvent}</h1> 
      </div>
    )
  } 
}


export default App // export App component