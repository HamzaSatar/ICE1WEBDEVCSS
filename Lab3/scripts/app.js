/*
    Name: Hamza Satar 100870272
    Date Completed: 2/5/2024
    Desc: JS file to interact with website
    App : app.js
*/

// Creates a new Human Resource link in the NAV BAR
function humanResourceLink() {
    // Create a new list item for Human Resources link
    var newNavItem = document.createElement('li');
    newNavItem.classList.add('nav-item');

    // Create a link for Human Resources
    var newNavLink = document.createElement('a');
    newNavLink.classList.add('nav-link');
    newNavLink.href = '';

    // Create a Font Awesome icon
    var icon = document.createElement('i');
    icon.classList.add('fa', 'fa-users');

    // Append the icon to the link
    newNavLink.appendChild(icon);

    // Add text to the link
    var linkText = document.createTextNode(' Human Resources');
    newNavLink.appendChild(linkText);

    // Append the link to the new list item
    newNavItem.appendChild(newNavLink);

    // Find the position to insert the new item (after "About Us")
    var aboutUsNavItem = document.querySelector('.navbar-nav .nav-item:nth-child(4)');

    // Insert the new list item before "Contact Us"
    aboutUsNavItem.parentNode.insertBefore(newNavItem, aboutUsNavItem.nextSibling);
}

// Changes the products link to interests and also changes the icon
function navBarInterests() {
    // Find the Products link
    var productsLink = document.querySelector('.navbar-nav .nav-item:nth-child(2) .nav-link');

    // Check if the Products link is found
    if (productsLink) {
        // Update the text content 
        productsLink.textContent = 'Interests';

        // Remove the existing icon 
        var existingIcon = productsLink.querySelector('i');
        if (existingIcon) {
            existingIcon.remove();
        }

        // Create a new icon for "Interests"
        var icon = document.createElement('i');
        icon.classList.add('fa', 'fa-heart');

        // Prepend the new icon to the link
        productsLink.prepend(icon);
    }
}

// Submits the values from the form using the HTML values and names and redirects after 3 seconds using redirect function.
function submitForm() {
    // Get user input values from form
    var name = document.getElementById('name').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Sned information to console
    console.log('Name:', name);
    console.log('Contact Number:', contactNumber);
    console.log('Email:', email);
    console.log('Message:', message);

    // Call the redirect function after a delay
    setTimeout(redirectUser, 3000);
}

// Function used as a parameter for built in 
function redirectUser() {
    window.location.href = './index.html';
}

function createBottomNavbar() {
    // Create the fixed bottom navbar
    var bottomNavbar = document.createElement('nav');
    bottomNavbar.classList.add('navbar', 'navbar-dark', 'bg-dark', 'fixed-bottom');

    // Create the container for the copyright statement
    var container = document.createElement('div');
    container.classList.add('container');

    // Create the copyright statement with the current date
    var copyrightText = document.createElement('p');
    copyrightText.classList.add('navbar-text');
    var currentDate = new Date().getFullYear();
    copyrightText.textContent = '© ' + currentDate + ' Hamza\'s Website. All rights reserved.';

    // Append the copyright text to the container
    container.appendChild(copyrightText);

    // Append the container to the bottom navbar
    bottomNavbar.appendChild(container);

    // Append the bottom navbar to the body
    document.body.appendChild(bottomNavbar);
}


// Changes the homepage index by grabbing the value through its ID
function changeWelcomeText(newText) {
    var welcomeHeading = document.getElementById("homepageText")

    if (welcomeHeading) {
        welcomeHeading.textContent = newText;
    }
}

// Changes the texts ID'd with interest in the product.html file
function changeInterestText() {
    // Get values from html doc using IDs
    var interestText1 = document.getElementById("interest1");
    var interestText2 = document.getElementById("interest2");
    var interestText3 = document.getElementById("interest3");

    // Change value of text
    interestText1.textContent = `Game of Thrones:
    Game of Thrones, a captivating fantasy epic, weaves a tale of power, politics, and dragons across the vast
    continents of Westeros and Essos. Based on George R.R. Martin's 'A Song of Ice and Fire' series, this HBO series
    immerses viewers in a world of noble families vying for the Iron Throne, with complex characters and
    unpredictable plot twists that keep fans on the edge of their seats.`;

    interestText2.textContent = `Inception:
    Inception, directed by Christopher Nolan, takes the concept of dreams to mind-bending heights. This cinematic
    masterpiece delves into the realm of subconscious heist, exploring the fragility of reality and the power of the
    mind. With a stellar cast led by Leonardo DiCaprio, Inception invites audiences on a visually stunning journey
    where dreams within dreams unravel in a mesmerizing puzzle of intrigue and emotion.`;

    interestText3.textContent = `Kanye West:
    Kanye West, a visionary in the realm of music and fashion, has reshaped the landscape of hip-hop and pop
    culture. From his groundbreaking debut album 'The College Dropout' to the genre-defying 'Yeezus' and beyond,
    Kanye's musical evolution reflects artistic fearlessness. Beyond the studio, his influence extends to fashion,
    with the YEEZY brand redefining streetwear. Kanye West's impact transcends genres, making him an enigmatic and
    influential figure in the entertainment world.`;


}

// Changes the texts ID'd with service in the services.html file
function changeServiceText() {
    // Get values from html doc using IDs
    var serviceText1 = document.getElementById("service1");
    var serviceText2 = document.getElementById("service2");
    var serviceText3 = document.getElementById("service3");

    // Change value of text
    serviceText1.textContent = `Custom Programming:
    Empower your business with our custom programming service. From automation scripts to full-scale software
    development, we offer tailored solutions to address your unique business challenges. Our team of experienced
    programmers excels in a variety of programming languages and frameworks, allowing us to develop custom
    applications, plugins, and integrations that meet your exact specifications. `;

    serviceText2.textContent = `Web Design:
    Elevate your online presence with our professional web design service. From sleek and modern layouts to
    intuitive user interfaces, we specialize in crafting visually stunning websites tailored to your brand's unique
    identity. Whether you're a small business, startup, or established enterprise, our team will work closely with
    you to create a captivating online experience that engages your audience and drives results.`;
    serviceText3.textContent = `Database Development:
    Unlock the power of data with our database development service. We specialize in designing and implementing
    robust database solutions that optimize efficiency, streamline processes, and fuel growth. From database
    architecture to data modeling and implementation, our experienced team will tailor a solution to meet your
    specific needs.`;

}

// Changes the texts ID'd with passion in the about.html file
function changePassionText() {
    // Get values from html doc using IDs
    var passionText1 = document.getElementById("passion1");
    var passionText2 = document.getElementById("passion2");

    // Change value of text
    passionText1.textContent = `Dota 2:
    My all-time favourite game to play, and my biggest passion outside of school, Dota 2 is a game I've invested
    12000 hours into. I've achieved semi-pro, however my goal to go fully pro still remains. I fell in love with
    this game as a child. My brothers introduced it to me and ever since I've been playing day in day out trying to
    improve. Hopefully one day I can achieve pro status!`;

    passionText2.textContent = `My Bird:
    My second biggest interest outside of school has to be my bird. He's a cockatiel that goes by the name "Birdy".
    He was hatched from an egg in an incubator that I placed on my desk for a few weeks. That, along with my PC kept
    him nice and warm. When Birdy was born he had to be fed through a syringe as he was smaller than my thumb.
    Nowadays Birdy enjoys the perks of adulthood as a healthy 2 year old cockatiel.`;
}

// Insert Username in Navbar function
function insertUsername(username) {
    // Create a new list item for the username
    var usernameListItem = $('<li class="nav-item"><span class="navbar-text" class="fa fa-user">' + username + '</span></li>');

    // Create variable for positioning
    var contactUsNavItem = $('.navbar-nav .nav-item:last-child');

    // Position name before contact us
    contactUsNavItem.before(usernameListItem);
}

// Event listener for the form submission
$('#loginForm').submit(function (event) {
    event.preventDefault();

    // Get the username from the form
    var username = $('#username').val();

    // Insert the username into the navigation bar
    insertUsername(username);
});

// Function to create and hide the ErrorMessage div
function createAndHideErrorMessageDiv() {
    // Create the div element
    var errorMessageDiv = $(`<div id="ErrorMessage"></div>`);

    // Hide the div initially
    errorMessageDiv.hide();

    // Append the div to the body of the document
    $('body').append(errorMessageDiv);
}

// Function to validate first name and last name
function validateNameInputs() {
    // Get the values of first name and last name
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    // Check if the length of first name is less than 2 characters
    if (firstName.length < 2) {
        // Display error message for first name and return false
        $('#ErrorMessage').text('First name must be at least 2 characters long.');
        $('#ErrorMessage').show();
        return false; 
    }

    // Check if the length of last name is less than 2 characters
    if (lastName.length < 2) {
        // Display error message for last name and return false
        $('#ErrorMessage').text('Last name must be at least 2 characters long.');
        $('#ErrorMessage').show(); 
        return false; 
    }

    // If both first name and last name are valid, hide the error message and return true
    $('#ErrorMessage').hide(); 
    return true; 
}

// Function to validate email address
function validateEmailAddress() {
    // Get the value of the email address input
    var email = $('#inputEmail4').val();

    // Check if the email address meets the minimum length requirement and contains an @ symbol
    if (email.length < 8 || email.indexOf('@') === -1) {
        // Display error message for invalid email address and return false
        $('#ErrorMessage').text('Please enter a valid email address (minimum length: 8 characters, must contain @ symbol).');
        $('#ErrorMessage').show();
        return false;
    }

    // If the email address is valid, hide the error message and return true
    $('#ErrorMessage').hide(); // Hide the error message
    return true; // Return true to indicate validation success
}

// Function to validate password
function validatePassword() {
    // Get the values of password and confirm password inputs
    var password = $('#inputPassword4').val();
    var confirmPassword = $('#confirmPassword4').val();

    // Check if passwords match and are at least 6 characters long
    if (password !== confirmPassword || password.length < 6) {
        // Display error message for invalid passwords and return false
        $('#ErrorMessage').text('Passwords must match and be at least 6 characters long.');
        $('#ErrorMessage').show(); 
        return false;
    }

    // If passwords match and meet the length requirement, hide the error message and return true
    $('#ErrorMessage').hide(); 
    return true;
}


// Event listener for form submission
$('#registerForm').submit(function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate the first name and last name inputs and hold boolean value in variable
    var isValidName = validateNameInputs();
    // If name is valid go to next validation and so on
    if (isValidName) {
        var isValidEmail = validateEmailAddress();
        if (isValidEmail) {
            var isValidPassword = validatePassword();
            if (isValidPassword) {
                // After validation, get inputs
                var firstName = $('#firstName').val();
                var lastName = $('#lastName').val();
                var email = $('#inputEmail4').val();
                var password = $('#inputPassword4').val();

                // Create a new User and log it
                var user = new User(firstName, lastName, email, password);
                console.log(user);

                // Reset the form
                $('#registerForm')[0].reset();
            }
        }
    }

});



// Function calls
createBottomNavbar();
navBarInterests();
humanResourceLink();
changeWelcomeText("Welcome to Hamza's Website!!!");
createAndHideErrorMessageDiv();


// Functions calls with conditions
if (window.location.href.includes('services.html')) {
    changeServiceText();
}

if (window.location.href.includes('product.html')) {
    changeInterestText();
}

if (window.location.href.includes('about.html')) {
    changePassionText();
}
