/* function to help us retrieve form data
-function to help us tell the user if they have invalid data in field (ie: letters in phone number)
-prompt to congratulate user on successful appointment with appointment details ie:"Congratulations! You now have an appointment at 2pm on Saturday, December 18, 2021!"
-functions to make hamburger menu work

*/

/* Mobile Menu Functionality */

document.getElementById('hbmenu').addEventListener('click', function() {
    document.querySelector('.navright-alt').classList.add('menu-open');
  })

  document.getElementById('close').addEventListener('click', function(){
    document.querySelector('.navright-alt').classList.remove('menu-open');
  })

/* Appointment Form */

/* Identifying Input Fields & Buttons */
let nameBar = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let date = document.getElementById('date');
// let chosenService = document.querySelectorAll('input[type="checkbox"]:checked');
//let service = document.getElementById('service');


let submitButton = document.getElementById('submitButton');


/* Function to trigger alerts for errors and successful submission */
function getInfo(e) {
  e.preventDefault()

  if (nameBar.value === '' || nameBar.value == null || phone.value === '' || phone.value == null || email.value ==='' || email.value == null || date.value ==='' || date.value == null) {
    alert('Please enter your information to make an appointment!')
  } 

  if (typeof phone.value != "string") {
    alert('Please enter a valid phone number')
  }
  
  if (typeof nameBar.value == "string" && typeof phone.value == "string") {
    alert(`Congratulations ${nameBar.value}! Your appointment has been made for ${date.value}!`)
    console.log(nameBar.value, email.value, phone.value, date.value);
/* needed to consult StackOverflow for this! Still find it weird that service could be iterated through without being defined in JS  https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox */ 
    for(let i=0; service[i]; ++i){
      if(service[i].checked){
           checkedValue = service[i].value;
           console.log(checkedValue)
      }
  } 
  }
  
}

/* Event Listener for submit button */

submitButton.addEventListener('click', getInfo); 

