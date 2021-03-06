import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum'
import Counter from '../Topics/Counter'

class TopicBrowser extends Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
                <Counter />
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome /> 
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser


