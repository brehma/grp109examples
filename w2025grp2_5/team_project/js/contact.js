document.getElementById('contact_form').addEventListener('submit', function(event) {
  // Prevent default, so page doesn't reload, we still want to manpulate DOM.
  event.preventDefault();
  var isValid = true;
  var errorMessages = '';
  // Get Values 
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var comment = document.getElementById('comment').value;
  let content = document.querySelector('.content')
  let form = document.querySelector('form');

// Validate Name 
  if (name.length <5){
    errorMessages += 'Name must be 5 characters long.\n';
    isValid = false;
  }
  // Validate Phone (10 digits)
  var phonePattern = /^[0-9]{10}$/; 
  if (!phonePattern.test(phone)){
    errorMessages += 'Phone must be 10 digits.\n';
    isValid = false;
  }
  // Validate Email 
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)){
    errorMessages += 'Enter a valid email address.\n';
    isValid = false;
  }
  // Validate Comments 
  if (comment.length < 10){
    errorMessages += 'Comments must be at least 10 characters long.\n';
    isValid = false;
  }
  // if invalid 
  if (!isValid){
    alert (errorMessages);
  } else {
    // If all the data is valid
    // Remove form from DOM, add thank you text
    const success_message = document.createElement("h2");
    success_message.textContent = "Thank you for contacting us!";
    content.removeChild(form);
    content.appendChild(success_message);
  }
});
               
