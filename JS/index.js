let input_box2 = document.getElementsByClassName('input2')[0];
let input_box1 = document.getElementsByClassName('input1')[0];
let flag=true;
let eq=[],answer=[];
let equation;
function getval(num){
    if(input_box2.value == "0"){ 
        input_box2.value=num;
    }
    else{
     input_box2.value+=num;
    }
}
function getans(){
    let ans = eval(input_box2.value);
    equation = input_box2.value;
    input_box2.value = ans;
    input_box1.value = equation + '=';
    eq.push(equation + '=');
    answer.push(ans);
}

function clr(){
    input_box2.value = '0';
    input_box1.value = '';
}

function backspace(){
    equation = input_box2.value;
    input_box2.value = equation.slice(0,-1);
}

function get_operator(num){
    if(input_box2.value == 0){
        input_box2.value=num
    }else{
        input_box2.value+=num
    }
}

function history(){
    hist = document.querySelector('.history-div');
    button = document.querySelector('.history');
    // flag?hist.style='visibility: visible':hist.style='visibility: visible'
    if(flag){
        hist.style='visibility: visible';
        // button.style='visibility: hidden';
    }
    else{
        hist.style='visibility: hidden';
        // button.style='visibility: visible';
    }
    flag=!flag;

    console.log(eq,answer)
    for(let i=0;i<eq.length;i++)
    {
        document.querySelector('.history-div').innerHTML += '<h2>'+eq[i]+'</h2><h1>'+answer[i]+'</h1>'

    }
}








