// Handle Slider Control and Display Password Length 
let lengthDisplay = document.querySelector('[data-lengthDisplay]');
// console.log(lengthDisplay)
let slider = document.querySelector('[data-lengthSlider]');
// console.log(slider)

let passwordLength = 10;

// Handle-Slider-Function
function HandleSlider() {
    slider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    // for slider background color
    const min = slider.min;
    const max = slider.max;
    slider.style.backgroundSize = ((passwordLength - min)* 100 / (max-min)) + "% 100%";
}
HandleSlider();


// Handle-Indicator-Function
  let indicator = document.querySelector('[data-indicator]');
//   console.log(indicator)
  function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //Shadow
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
  }
  // Default Indicator 
setIndicator("#ccc");
// function random integer 
 function GenrateRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min) + min );
 }

 // function random Number
  function generateRandomNumber() {
    return GenrateRandomInt(0, 9);
  }
  function generateRandomUppercase() {
    return String.fromCharCode(GenrateRandomInt(65, 91));
  }
  
  function generateRandomLowercase() {
    return String.fromCharCode(GenrateRandomInt(97, 123));
  }
  // Generate Random Letters and Number and Symbols
  const symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
  function generateRandomSymbol() {
    let index = GenrateRandomInt(0, symbol.length)
//    return  symbols.charAt(ranNum);
   return symbol[index];

  }
//  console.log(generateRandomLowercase());
// console.log(generateRandomUppercase());
// console.log(generateRandomNumber());
// console.log(generateRandomSymbol());


const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');


// calculate password strength
function calStrength() {
    let hasUpper = false; 
    let hasLower = false;
    let hasNum   = false;
    let hasSym  = false;
    if (uppercase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbers.checked)   hasNum   = true;
    if (symbols.checked)   hasSum   = true;
    
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8) {
        setIndicator("#0f0");
    } else if ( 
        (hasUpper || hasLower) &&
        (hasNum || hasSym) &&
        passwordLength >=6) {
            setIndicator("#ff0");
    } else {
        setIndicator("#f00")
    }


    
}
// copy-content-funtion
let copyMessage = document.querySelector('[data-copyMessage]');
let copyBtn = document.querySelector(".copyBtn");
let passwordDisplay = document.querySelector('[data-passwordDisplay]');
// passwordDisplay.value = "My Name is Uddeshya";
async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMessage.innerText = "Copied";
  }
  catch (error) {
    copyMessage.innerText = "Failed";
  }
  copyMessage.classList.add("active");
  setTimeout(() => {
    copyMessage.classList.remove("active");
  }, 1000);

}

slider.addEventListener('input', (e) => {
  passwordLength =  e.target.value;
  HandleSlider();

})

 copyBtn.addEventListener('click', () => {
  if (passwordDisplay.value !== "") {
    copyContent();
  }
});

let allcheckBox = document.querySelectorAll("input[type=checkbox]");

let checkCount  = 0;

function handleCheckBoxChange() {
  checkCount = 0; 
  allcheckBox.forEach(checkbox => {
    if (checkbox.checked) {
      checkCount ++;
    }
    
  });  
  // Special-condition 
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    HandleSlider();

  }
}

allcheckBox.forEach(checkbox => {
  checkbox.addEventListener('change', handleCheckBoxChange);
});
// shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
// Shuffle the array randomly - Fisher Yates Method
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}
//Genrate Btn Function Start
let password = "";
let generatebtn = document.getElementById('generateBtn');

generatebtn.addEventListener('click', (e) =>  {

if (checkCount <= 0) return;

if (passwordLength < checkCount) {
  passwordLength = checkCount;
  HandleSlider();
}
//  remove old password 
password = "";
// check which checkbox is checked 



  let arrayOfCheckedFunction = [];
    if (uppercase.checked) {
   arrayOfCheckedFunction.push(generateRandomUppercase)
  }
  if (lowercase.checked) {
    arrayOfCheckedFunction.push(generateRandomLowercase);
    }
  if (numbers.checked)   {
    arrayOfCheckedFunction.push(generateRandomNumber);
    }
  if (symbols.checked)  {
   arrayOfCheckedFunction.push(generateRandomSymbol);
    }
   // compalsary addition 
      for (let i=0; i < arrayOfCheckedFunction.length; i++) {
        password += arrayOfCheckedFunction[i]();
      }
      //  console.log("Password: " + password);
      //remaining addition the condition to generate the remaining characters
      for (let i = 0; i < passwordLength - arrayOfCheckedFunction.length; i++) {
        let randIndex = GenrateRandomInt(0, arrayOfCheckedFunction.length);
        password += arrayOfCheckedFunction[randIndex]();
    }
      // console.log("Password: " + password);
      // Shuffle Password 
      password = shuffle(Array.from(password));
      passwordDisplay.value = password;
      calStrength();


});

 