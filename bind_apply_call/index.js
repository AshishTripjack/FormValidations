let name = {
    firstName: "Ashish",
    lastName: "Tiwari",
    getName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
name.getName();

//or we can create a separate function 

let printFullName = function (homeTown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${homeTown},${state}`);

}
//Also we can argument as well
printFullName.call(name, "Siwan", "Bihar");


//there is also a method for function borrowing that is "apply method" and 
//the difference is this that we can pass the argument individually in call method but in ..
//apply method we pass the arguments in a array list

printFullName.apply(name, ["Siwan", "Bihar"]);



let name2 = {
    firstName: "Naman",
    lastName: "Tiwari"
}

//function borrowing
name.getName.call(name2);

//Bind method

// Instead of directly calling the method,the bind method bind the method(printFullName) with object 
//And returns as the copy of the method
//It can't call directly, it will return us a method which can call later

let printMyName = printFullName.bind(name, "Siwan", "Biahr");
printMyName();

//We can't call bind method directly
printFullName.bind(name, "Siwan", "Biahr");


//Pollyfills for Bind Mehtod

//Pollyfill is a way to modify or add new functions
//Polyfills means "what if the browser don't have bind function and we have to write our own bind function "

let name3 = {
    firstName: "Ashish",
    lastName: "Kumar"
}

let printName = function (home,state) {
    console.log(`${this.firstName} ${this.lastName} ${home} ${state}`);
}

let printing = printName.bind(name3);
printing();


//Now lets create our own Bind Method

//Every function in js have access to bind method,so we have to create a method who should access to our method
//We can get that by Function.prototype
//Now bind method returns a fucntion so we have to return a function

Function.prototype.myBind = function (...args) {

    let obj = this
    params=args.slice(1);
    return function () {
        obj.apply(args[0],params)
    };

};

let printingName = printName.myBind(name3,"Gopalganj","Bihar");
printingName();