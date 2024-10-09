import React from 'react';

class Unmount extends React.Component{

    componentDidMount(){
        this.intervalId=setInterval(()=>{
            console.log("Interval Tick");
            
        },1000)
    };

    //This method will call only when the component is removed
    componentWillUnmount(){
        clearInterval(this.intervalId);
        console.log("Interval Tick Removed");
        
    };

    render(){
        return(
            <>
                <h2>Child Component will unmount</h2>
            </>
        )
    }
}

export default Unmount;