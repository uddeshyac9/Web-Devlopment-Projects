const countValue = document.getElementById('num');

const decreament = () => {
    // get the value from UI
 let value = parseInt(countValue.innerText);
//   Decrease the value
 value = value - 1;
//   put value inside the UI
 countValue.innerText = value;
}
const increament = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // Increase the value
    value = value + 1 ;
    // put value inside the UI
    countValue.innerText =value;

}
