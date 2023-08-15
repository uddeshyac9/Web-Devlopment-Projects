const btn = document.getElementById('btn');
const birthday = document.getElementById('birthday');
const result = document.getElementById('result');

function calculateAge() {
  const birthdayValue = birthday.value;
  
  if (birthdayValue === "") {
    alert("Please enter your Birthdate");
  } else {
    let age = getAge(birthdayValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "Years" : "Year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  
  if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

btn.addEventListener('click', calculateAge);
