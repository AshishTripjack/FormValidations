import React from "react";
import './style.css';
import Cloud from './clouds.png';

class App extends React.Component {

    formatName=(user)=>{
        return `Super human ${user}`;

    }

constructor(props){
        super(props);

        this.state={
            name:''
        }
    }

    handleButtonClickEvent=(event)=>{
        this.setState({name:'Ashish'})

    };

    render() {

        const element=<h2>Hello World</h2>

        const name="Ashish";
        const elementTwo=<h2>Hello {name}</h2>

        const elementThree=(
            <div className="my-class">
                <h2>This is {this.formatName('SuperMan')}</h2>

            </div>
        )

        return (
            <div>
                <h1>This is my react component</h1>
                <button onClick={this.handleButtonClickEvent}>Click Me</button>
                {this.state.name && <p>{this.state.name}</p>}
                <img src={Cloud} alt="Cloud" />
                {element}
                {elementTwo}
                {elementThree}
            </div>
        );
    }
};

export default App;