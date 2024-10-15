// let counter=0;

// const getData=function(){
//     // calls an api and get data
//     console.log("Fetching data", counter++);
    
// }

// const doSomeMagic=function(fn,delay){
//     let timer;

//     return function(){
//         let context=this,
//         args=arguments;
//         clearTimeout(timer);
//          timer=setTimeout(()=>{
//             getData.apply(context,arguments);
//          },delay);
//     }
// }

// const betterFunction=doSomeMagic(getData,300);


const inputElement=document.querySelector('input');
const container=document.getElementById("container");

const debounce=(func,delay)=>{
    let timerID;
    return (...args)=>{  //through args we can recieve multiple arguments other than e..
        clearInterval(timerID);
        //it clear the previous timers by which the number of calls will reduce

        timerID=setTimeout(()=>{
            func(...args);
        },delay);
    }

}

const handleInput=(e)=>{
    console.log("Calling API",e.target.value);  
}

let debouncedCall=debounce(handleInput,1000);

inputElement.addEventListener('input',debouncedCall);