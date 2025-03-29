document.getElementById('reservation_form').addEventListener('submit', function(event) {
  
  // initialize form data
  const first_name_node = document.getElementById('fname');
  const last_name_node = document.getElementById('lname');
  const email_node = document.getElementById('email');
  const phone_number_node = document.getElementById('phone');
  const date_time_node = document.getElementById('date-time');
  const num_of_people_node = document.getElementById('num_of_people');

  let is_valid = true;


  // If the first name is empty or null, make border of node red, set is_valid
  // to false
  if (first_name_node.value === "" || first_name_node.value === null) {
    first_name_node.style.borderColor = 'red';
    is_valid = false;
    event.preventDefault();
  }
  else {
    first_name_node.style.borderColor = 'rgb(118, 118, 118)';
  }
  // If the last name value is empty or null, make border of node red, set
  // is_valid to false
  if (last_name_node.value === "" || last_name_node.value === null) {
    last_name_node.style.borderColor = 'red';
    is_valid = false;
    event.preventDefault();
  }
  else {
    last_name_node.style.borderColor = 'rgb(118, 118, 118)';
  }
  // If the email value is empty or null, or does not include and @ or . 
  // symbol, then set node border color to red, and make is_valid false
  if (email_node.value === "" || email_node.value === null || 
      !email_node.value.includes("@") || !email_node.value.includes(".")) {
    email_node.style.borderColor = 'red';
    is_valid = false;
    event.preventDefault();
  }
  else {
    email_node.style.borderColor = 'rgb(118, 118, 118)';
  }
  // If the phone number value is empty or null or more than 15 chars, then
  // set border value to red and is_valid to false
  if (phone_number_node.value === "" || phone_number_node.value === null || 
      phone_number_node.value.length > 15) {
    phone_number_node.style.borderColor = 'red';
    is_valid = false;
    event.preventDefault();
  }
  else {
    phone_number_node.style.borderColor = 'rgb(118, 118, 118)';
  }
  // If the date_time_node is empty or null, set border color to red and 
  // make is_valid false
  if (date_time_node.value === "" || date_time_node.value === null) {
    date_time_node.style.borderColor = 'red';
    is_valid = false;
    event.preventDefault();
  }
  else {
    date_time_node.style.borderColor = 'rgb(118, 118, 118)';
  }
  
  // If is_valid is true, then create a new page that says thank you and
  // has the info of the user
  if (is_valid) {
    // create a constant which will contain new page html
    const reservationSuccessfulPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="This is the homepage of Seattle Sushi, the best sushi in Western Washington!">
        <title>Reserved! - Seattle Sushi</title>
        <link rel="stylesheet" href="../css/style.css">
        <style>
          body {
          transform: scale(1);
          transform-origin: top left;
          }
        </style>
    </head>
    <body id="reservation_successful">
      <!-- header -->
        <div class="header">
            <div class="left-links">
                <h2>Seattle Sushi</h2>
            </div>
            <div class="right-links">
                <ul>
                    <li><a href="../index.html" rel="noopener noreferrer">Home</a></li>
                    <li><a href="contact.html" rel="noopener noreferrer">Contact</a></li>
                    <li><a href="reservation.html" rel="noopener noreferrer">Reservation</a></li>
                    <li><a href="changeDocument.html" rel="noopener noreferrer">Iteration</a></li>
                    <li><a href="../project_details/project_details.html" rel="noopener noreferrer">Roles</a></li>
                    <li><a href="../notes/project_setup.html" rel="noopener noreferrer">Details</a></li>
                </ul>
            </div>
        </div>

      <!-- content -->
        <div class="content">
          <h1>Reservation successful!</h1>
          
              <p>Thank you ${first_name_node.value} for your reservation. We are excited to serve you</p>
              <ul>
                <li>Email: ${email_node.value}</li>
                <li>Phone: ${phone_number_node.value}</li>
                <li>Date and time: ${date_time_node.value}</li>
                <li>Number of people: ${num_of_people_node.value}</li>
              </ul>
              <p>Contact us if you have any questions!</p>
        </div>

      <!-- footer -->
        <div class="footer">
          <!-- copyright -->
          <div>
            <p>Copyright @ 2025 Seattle Sushi</p>
          </div>
      
          <!-- HTML validator link -->
          <div>
            <a href="https://validator.w3.org/check?uri=referer"
              target="_blank" rel="noopener noreferrer">
            <img src="https://www.w3.org/Icons/valid-xhtml10" 
              alt="Valid XHTML 1.0 Strict">
            </a>
          </div>
        
          <!-- CSS Validator link -->
          <div>
            <a href="https://jigsaw.w3.org/css-validator/check/referer" 
                target="_blank" rel="noopener noreferrer">
            <img src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
              alt="Valid CSS!">
            </a>
          </div>
        </div>
    </body>
    </html>
    `;

    // This will open a new page, with info loaded
    const newWindow = window.open();
    newWindow.document.write(reservationSuccessfulPage);
    newWindow.document.close();
    newWindow.document.body.style.zoom = "100%"; // Browser automatically zooms in at 200%
  }
});
                                   
