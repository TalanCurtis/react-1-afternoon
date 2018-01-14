import React , {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    render(){

        setTimeout(()=>{
            this.setState({count:this.state.count+1})
        }, 1000)
        return(
            <div className='puzzleBox evenAndOddPB'>
            <span className='resultsBox'>Time: {this.state.count}</span>
            </div>
        )
    }
}

export default Counter