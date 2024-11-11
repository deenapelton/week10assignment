/*I need to add a new row to the table when clicking
on the submit button. I will want to have and event 
listener. I will be able to call elements by id*/
const myButton = document.getElementById('myButton')

myButton.addEventListener('click', (event) => { 
    //this keeps it from refreshing when submit is clicked
    event.preventDefault()
    //let table = document.getElementById('mytable');
    //let row = table.insertRow(0)
    //Here are my varables
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let inputEmail = document.getElementById('inputEmail').value
    let phoneNumber = document.getElementById('phoneNumber').value
//below was my first attemt to get value and create a new row
    //row.insertCell(0).innerHTML = document.getElementById('firstName').value;
    //row.insertCell(1).innerHTML = document.getElementById('lastName').value;
    //row.insertCell(2).innerHTML = document.getElementById('inputEmail').value;
    //row.insertCell(3).innerHTML = document.getElementById('phoneNumber').value;
  // now I have to create a node, tr node to append to my form
  // I think this is what I was missing before
  let newTableRow = document.createElement('tr')

  let firstNameNode = document.createElement('td')
   firstNameNode.innerHTML =firstName
   newTableRow.append(firstNameNode)

   let lastNameNode = document.createElement('td')
   lastNameNode.innerHTML = lastName
   newTableRow.append(lastNameNode)

   let inputEmailNode = document.createElement('td')
   inputEmailNode.innerHTML = inputEmail
   newTableRow.append(inputEmailNode)

   let phoneNumberNode = document.createElement('td')
   phoneNumberNode.innerHTML = phoneNumber
   newTableRow.append(phoneNumberNode)

document.getElementById('tBody').appendChild(newTableRow)
   
//here is code to clear selection after
document.getElementById('firstName').value =""
document.getElementById('lastName').value = ''
document.getElementById('inputEmail').value =''
document.getElementById('phoneNumber').value =''





})

    console.log("Does this work");

    
    