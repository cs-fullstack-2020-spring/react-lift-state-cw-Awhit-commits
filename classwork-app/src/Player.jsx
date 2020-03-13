import React, { Component } from 'react'

export default class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
        }
        // this should be outside of your constructor
        let clickButton =() =>{
            this.setState(
                {
                   name: this.state.name,
                }
                
            )
            
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={this.clickButton}>Click Here</button>
            </div>
        )
    }
}
