import React from 'react'; // import react

class App extends React.Component {
  render() {
    return <button>I <Heart /> React</button> // inject Heart component inside App component
  } 
}

const Button = (props) => <button> {props.children}</button>

class Heart extends React.Component { // create Heart component
  render() { // use render method to display the span
    return <span>&hearts;</span>
  }
}

export default App // export App component