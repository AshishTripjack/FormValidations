import React, { Component } from 'react'

export default class MyButton extends Component {

    constructor(){
        super(); 
        this.state={
            count:0
        }
        // this.handleClick=this.handleClick.bind(this);

        //this inside the bind method refers to the current object i.e MyButton class

    }

    //handleCLick is an event-handler
   //Now we have to use bind method to get "this" in constructor()
    handleClick(){

        console.log("Clicked" , this); //after binding, we get this
        //Now by using "this" we can access any props and state of the component

        this.setState({
            count:this.state.count+1
        });
        

        //In event handlers there is no this
        console.log(this);// after clicking it logs "undefined"
        
        let today=new Date();
        alert(today.toLocaleString());
    }
  render() {
    // console.log("Rendered",this);
    
    return (
      <div>
      <h1>Hello Ashish</h1>
        <h2>Count is: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}


 // i] We can get "this" in event handler by making a event handler using function with "ARROW FUNCTION"
    // ii] By using "bind method" with normal function
    //iii] directly use bind method in onCLick--> {this.handleClick.bind(this)}....here a problem exists that by using bind in onClick it binds the this keyword on each click

    //Example (not for this component)

    // let user={
    //     fullName:"Ashish Kumar",
    //     getName:function(){
    //         console.log(this.fullName);
            
    //     }
    // }

   

    // setTimeout(user.getName, 2000);
    //here in getName function "this" doesnot called by the current object , instead it is called by setTimeout method
    //therefore it logs undefined

  
    //Now we get the reference of user object 
    // let x=user.getName.bind(user);
    // setTimeout(x,2000);

    //Now to understand that this.fullname should be called by the current object we have to use the bind method 