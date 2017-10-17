import React from 'react'; // import react

const HOC = (InnerComponent) => class extends React.Component {

  constructor() {
    super(); // display the context
    this.state = {count: 0} // default state
  }

  update() { // update by one
    this.setState({count: this.state.count + 1}) // update state by 1 on every click/mouseover
  }

  componentWillMount() {
    console.log('will mount')
  }

  render() {
    return (
      <InnerComponent 
        {...this.props} // set props
        {...this.state} //set state
        update={this.update.bind(this)} // update
      />
    )
  }
}

class App extends React.Component {
  render() { // render App component
    return (
      <div>
        <Button> button </Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

const Button = HOC((props) => 
  <button onClick={props.update}>
    {props.children} - {props.count}
  </button>)

class Label extends React.Component {

  componentWillMount() {
    console.log('label will mount')
  }

  render() {
    return (
      <label onMouseMove={this.props.update}>
        {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HOC(Label)

export default App