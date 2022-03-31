let screen = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let screenValue= " ";
for(item of buttons){
    item.addEventListener("click", (e)=>{
buttonText=e.target.innerText;
console.log( "This is button text" + buttonText)

if(buttonText=="X"){
    buttonText= "*";
    screenValue = buttonText
    screen.value  += screenValue;
    // console.log(screen.value)

}
else if
    (buttonText == "C"){
        // buttonText= " ";
    screen.value  = "";

    }
    else if
    (buttonText == "="){
        screen.value = eval(screen.value);

    }
    else{
        screen.value+=buttonText
    }


        })
}

