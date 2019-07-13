import React, { Component } from 'react'

export default class LifeCycle extends Component {


    state={
        isLoading:true
    }

    constructor(){
        super();
        console.log("constructor")
    }

    Change = () => {
        this.setState({
            value:!this.state.value
        })
    }

    componentDidMount(){
        // console.log("component did mount")
        setInterval(() => {
            this.setState({
                isLoading:!this.state.isLoading
            })
        },1000)
        // setTimeout(() => {
        //     this.setState({
        //         isLoading:false
        //     })
        // },3000)
    }

    componentDidUpdate(){
        console.log("component did update")
    }


    // componentWillMount(){
    //     console.log("component will mount")
    // }

    render() {
        return (
            <div>
                {/* <button onClick={this.Change}>Change</button> */}
                {
                    this.state.isLoading == true ? <h1>Loading</h1> : 
                    <h1>Data loaded successfully</h1>
                }
            </div>
        )
    }
}
