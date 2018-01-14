import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            palindrome:'',
        }
    }

    solve(userInput){
        console.log(userInput);
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if (forwards === backwards){
            this.setState({palindrome:'This is a Palindrome'})
        }else{
            this.setState({palindrome:'Sorry, that is not a Palidrome '})
        }
    }

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e)=>{this.setState({userInput: e.target.value})}}>{this.userInput}</input>
                <button className='confirmationButton' onClick={()=>{this.solve(this.state.userInput)}}></button>
                <span className='resultBox'>{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome