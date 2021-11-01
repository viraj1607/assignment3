import { Component } from 'react';
import './App.css';
import Feedback from './components/feedback/feedback';


class App extends Component{
  render(){
    return(
     <div className="main-container">
       <Feedback/>
     </div>
    )
  }
}

export default App;
