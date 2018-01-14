import React, { Component } from 'react';

export default class EvenAndOdd extends Component{
    constructor(props){
        super(props)
        this.state = {
            evenArray:[],
            oddArray: [],
            userInput: ""
        }
    }
    handleChange(val){
        this.setState({userInput:val});
    }

    solve(userInput){
        //console.log(userInput)
        var arr = userInput.split(',');
        let evens = [];
        let odds =[];
        console.log(arr)

        for(let i=0; i<arr.length;i++){
            if(arr[i]%2===0){
                evens.push(parseInt(arr[i], 10))
            }else{
                odds.push(parseInt(arr[i], 10))
            }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds,
        })

    }

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=> {this.solve(this.state.userInput)}}>Split</button>
                <span className='resultBox'>Evens:[{this.state.evenArray}]</span>
                <span className='resultBox'>Odds:[{this.state.oddArray}]</span>
            </div>
        )
    }
}


