import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';

export function Welcom(props) {
  // let greeting = "Hello";
  // if(props.gender==="male"){
  //   greeting = "Hello Sir ";
  // }else if(props.gender ==="female"){
  //   greeting = "Hello mam ";
  // }
  // console.log(props)

  let greeting = "Hello"
  if(props.gender === "male"){
    return <h1>{greeting} Sir {props.name}</h1> 
  }
  else if(props.gender === "female"){
    return <h1>{greeting} Mam {props.name}</h1>
  }

  return <h1>{greeting} {props.name}</h1>

}

// export function Avatar() {
// return  <img src={logo} className="App-icon" alt="logo" />;
// }

// export class Clock extends Component{
//     constructor(){
//         super();
//      this.state = {
//             date : new Date()
//         }
//     }
//     componentDidMount(){
//         setInterval(() => {
//             this.setState({date : new Date()})
//         }, 1000);
//     }
//    render(){
//        return(
//            <div>   
//                <h1>Time {this.state.date.toLocaleTimeString()}</h1>
//          </div>
//        )
//    } 
// }

