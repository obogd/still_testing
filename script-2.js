const my_button = document.getElementById('join_newsletter');

my_button.onclick = function(){
  event.preventDefault(); 

  const name = document.getElementById('name');

  if (name.value === ""){
    name.style.border = '2px solid red';
  } else {
    name.style.border = 'none';
  }

  const email = document.getElementById('email');

if (email.value === ""){
	email.style.border = '2px solid red';
} else { 
email.style.border = 'none';
}
}
