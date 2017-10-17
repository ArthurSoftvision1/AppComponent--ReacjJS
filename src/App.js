import React from 'react'; // import react

class App extends React.Component {
  render() {
    return <Subject text="1234567"/> // return Subject component with text prop
  } 
}

const Subject = (props) => <h1>Subject: {props.text} </h1>

Subject.propTypes = {
  text(props, propName, component) {
    if (props[propName].length < 6) { // check the length
      return new Error(`${propName} was too short`) // drop the error message
    }
  }
}

export default App // export App component