var romlist = document.getElementById("HMR3_dropdown");

var newOption = document.createElement('option');
newOption.innerText = "New value";
newOption.setAttribute('value', 'newvalue');

romlist.appendChild(newOption);