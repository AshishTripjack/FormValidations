import React from 'react'

class ShouldUpdate extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.count); 
         //here it shows in console but the count doesnot update in UI because by default this method is false
         //For updating the state we have to return true

         //we can also do conditional rendering i.e when to render or not

        //  if(nextState.count <5){
            
        //     return true;
        //     //here the state updates till 4 and re-renders and after then the update will happen but no re-rendering
        //  }



         return true;
        
    }

    componentDidUpdate(){
        console.log("update");
        
    }

    render(){
        return(
            <>
                <h2>Should Component Update</h2>
                <h2>Count: {this.state.count}</h2>

                <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>
            </>
        )
    }
}

export default ShouldUpdate;