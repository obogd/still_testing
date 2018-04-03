const my_button = document.getElementById('join_newsletter');

my_button.onclick = function(){
  event.preventDefault(); 

  const name = document.getElementById('name');

let classNames = name.classList;


  if (name.value === ""){
    classNames.add("red");
  } else {
   classNames.remove("red");
  }

  const email = document.getElementById('email');
	let classEmails = email.classList;

if (email.value === ""){
	classEmails.add("red");
} else { 
classEmails.remove("red");
}
}
