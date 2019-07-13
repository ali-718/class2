import React ,{Component}from 'react';

export class Counter extends Component{
    constructor(){
        super();
        this.state={count:0,isDisable: true}
    }
    
    increment(){
        this.setState({count : this.state.count + 1});
        if (this.state.count > 0) {
            this.setState({isDisable : false})
        }
     }
    decrement(){
        if (this.state.count > 0) {
            this.setState({count : this.state.count-1});
        }else{
            this.setState({isDisable : true})
        }
    }
render(){
    return(
        <div>
<button onClick={this.increment.bind(this)}>Increment</button>
{this.state.count}
<button onClick={this.decrement.bind(this)} disabled={this.state.isDisable}>Decrement</button>
        </div>
    )
}
}