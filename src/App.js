import React from 'react';

class App extends Component {

  state = {resault: ''}

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json)
    .then(json => this.setState({resault: json})
  }
  
  render(){
    return (
      <div>Hello</div>
    )
  }
}

export default App
