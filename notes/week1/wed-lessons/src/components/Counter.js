import React, { Component } from 'react';
import StyledButton from './global-component-styles/StyledButton';


class Counter extends Component{
    constructor(props){
        super(props);
        this.state = { 
            cakes : 5
        }

    }
    changeCounter = () => {
        this.setState({
            cakes: this.state.cakes + 1
        })
    }
    render(){


        return(
            <div>
            <h1><marquee behavior="" direction="">{ this.props.text }</marquee></h1>
            {/* <p onClick={ () => this.setState({num: num + 1}) }>I've eaten { this.props.num } cakes today</p> */}
            <p onClick={ this.changeCounter }>I've eaten { this.state.cakes } vegatalbes today</p>
            <button className="button">Click Me </button>
            <StyledButton color="purple"> Hello </StyledButton>
            
            </div>
        );
    }
}

export default Counter;