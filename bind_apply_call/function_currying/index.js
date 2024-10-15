let multiply=function(x,y){
    console.log(x*y);
};

let multiplyByTwo= multiply.bind(this,2,3);
multiplyByTwo();

let multipleByThree=multiply.bind(this, 5,3);
multipleByThree();


// another way to do function currrying "using closure"

let multiplication=function(x){
    return function(y){
        console.log(x*y);
        
    }
}

let multiplyByFour=multiplication(2);
multiplyByFour(3);