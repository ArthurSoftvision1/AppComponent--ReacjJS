import React from 'react'; // import react

class App extends React.Component {
  render() {
    let prop = this.props.txt // put the txt in prop
    return <h1>{prop} </h1> // using props
  }
}

export default App // export App component