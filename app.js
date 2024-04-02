let inputBox = document.querySelector(".input-box input");

let inputBox2 = document.querySelector(".input-box");

let copyBtn = document.querySelector(".copy-btn");

let generateBtn = document.querySelector(".generate-btn button");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "~!@#$%^&*_";

let combine = upperCase + numbers  + lowerCase ;

generateBtn.addEventListener("click" , () =>{
    if(inputBox.value.length > 9){
        inputBox.value = "";
    }
       if(inputBox.value === ""){
        let length = 1;
        inputBox.value += numbers[ Math.floor(Math.random()*numbers.length)];
        inputBox.value += symbols[ Math.floor(Math.random()*symbols.length)];
        inputBox.value += upperCase[ Math.floor(Math.random()*upperCase.length)];
        inputBox.value += lowerCase[ Math.floor(Math.random()*lowerCase.length)];
        while(length < 9){
            inputBox.value += combine[ Math.floor(Math.random()*combine.length)];
            length++;
        }

       }else{
        inputBox.value += numbers[ Math.floor(Math.random()*numbers.length)];
        inputBox.value += symbols[ Math.floor(Math.random()*symbols.length)];
        inputBox.value += upperCase[ Math.floor(Math.random()*upperCase.length)];
        inputBox.value += lowerCase[ Math.floor(Math.random()*lowerCase.length)];
        while(length < 3){
            inputBox.value += combine[ Math.floor(Math.random()*combine.length)];
            length++;
        }
       }
});
 
copyBtn.addEventListener("click" , () =>{
   inputBox.select();
   document.execCommand("copy");
   if(inputBox.value === "")
  {

  }else{
    inputBox2.classList.add("active");
  setTimeout(() =>{
    inputBox2.classList.remove("active");
  }, 1500);
  }

});