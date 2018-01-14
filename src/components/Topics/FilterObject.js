import React, { Component } from 'react';


class FilterObject extends Component{
    constructor(props){
        super(props);
        this.state = {
            unfilteredArr:[{name:"Jonny", age:20, hobby:'Dancing'},
                            {name:"Daina", age:33, hobby:'Singing'},
                            {Title:"Fisher", age:13, food:'Pie'},
                            {name:"George", age:55, hobby:'Looper'},
                            {Title:"McDon", age:66, food:'Bread'}],
            userInput:"",
            filteredArr:[]
        }
    }

    solve(prop){
        let people = this.state.unfilteredArr;
        let filtered = [];

        for(let i=0;i<people.length;i++){
            if(people[i].hasOwnProperty(prop)){
                filtered.push(people[i]);
            }
        }
        this.setState({filteredArr: filtered})
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object </h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArr)}</span>
                <input className='inputLine' onChange={(e)=>this.setState({userInput:e.target.value})}></input>
                <button className='confirmationButton' onClick={()=>{this.solve(this.state.userInput)}} ></button>
                <span className='resultBox filterObjectRB'>{JSON.stringify(this.state.filteredArr)}</span>
            </div>
        )
    }
}

export default FilterObject