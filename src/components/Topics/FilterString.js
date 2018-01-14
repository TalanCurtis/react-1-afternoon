import React, { Component } from 'react';

class FilterString extends Component{
    constructor(props){
        super(props);
        this.state={
            unfilteredArr: ["James", "Mike", 'Lilly', 'Hand', 'Homer', 'Zeath'],
            userInput: "",
            filteredArr:[]
        }
    }

    solve(userInput){
        console.log(userInput)
        let names = this.state.unfilteredArr;
        let filtered = []
        userInput= userInput.toLowerCase()
        for(let i=0;i<names.length; i++){
            if(names[i].toLowerCase().includes(userInput)){
                filtered.push(names[i])
            }
        }
        this.setState({filteredArr: filtered})
    }

    render(){
        return(
        <div className='puzzleBox filterStringPB'>
            <h4>String Filter</h4>
            <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArr)}</span>
            <input className='inputLine' onChange={(e)=>{this.setState({userInput:e.target.value})}}></input>
            <button className='confirmationButton' onClick={()=>{this.solve(this.state.userInput)}}></button>
            <span className='resultBox filterStringPB'>{JSON.stringify(this.state.filteredArr)}</span>
        </div>
        )
    }
}

export default FilterString