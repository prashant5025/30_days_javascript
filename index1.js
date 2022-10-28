let age = document.querySelector('#input');



function handleInput(){
    let age = document.querySelector('#input').value;
    if (age > 18){
        alert(`You are ${age} years old. You are old enough to drive`);
    }else if(age == ''){
        alert('Please enter your age');
    }
    else{
        alert(`You are ${age} years old. You will be allowed to drive after ${18 - age} years`);
    }
}