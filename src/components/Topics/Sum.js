import React, {Component} from 'react';

class Sum extends Component{
    constructor(props){
        super(props);
        this.state={
            number1:0,
            number2:0,
            sum: null
        }
    }

    solve(num1, num2){
        console.log(num1, num2)
        this.setState({sum: num1 + num2})
    }

    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum Component</h4>
                <input className='inputLine' onChange={(e)=>{this.setState({number1:parseInt( e.target.value, 10)})}}></input>
                <span>+</span>
                <input className='inputLine' onChange={(e)=>{this.setState({number2: parseInt( e.target.value, 10)})}}></input>
                <button className='confirmationButton' onClick={()=>{this.solve(this.state.number1, this.state.number2)}}></button>
                <span className='resultsBox'>{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum
