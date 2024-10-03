// document.getElementById('images').addEventListener('click',function(e){
//     console.log('click inside the ul');

// });

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log('owl clicked');

// });


// if we want to remove the image/li when clicked 

document.querySelector("#images").addEventListener('click', function (e) {
    console.log(e.target.tagName);

    // if we doesn't use if statement then, when we click on li then his parent will be the ul and then it removes the ul,but we want to remove the li which is the parent of img.

    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }


})

