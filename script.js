// --- DOM ELEMENT SELECTION ---
// Selecting buttons and elements that will be manipulated by JavaScript
//Dark Mode Button
let darkModeBtn = document.getElementById("darkModeBtn");
let topNav_a = document.querySelectorAll("a.top-nav");
let h1 = document.querySelector("h1");
let mainSection = document.querySelectorAll("main section");
let footer = document.querySelector("footer");
let profileImg = document.getElementsByClassName("profile-img");

//Suit Up Button
let suitUpBtn = document.getElementById("suitUpBtn");

//Send Button
let sendBtn = document.getElementById("sendBtn");
let username = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let thanksMessage = document.getElementById("thanksMessage");

// --- DARK MODE FUNCTIONALITY ---
// Toggles style classes for dark mode and updates button text/images
darkModeBtn.addEventListener("click", function() {
  
    // Reset h1 content to the original name when switching modes
    h1.textContent = "Leonardo Jose Ambrosio";


  // Toggle classes to invert colors for all major layout sections
  document.body.classList.toggle("darkMode");
  
  //nav  
  for (let a of topNav_a) {
    a.classList.toggle("navReverse");
  } 

  //h1
  h1.classList.toggle("h1Reverse");

  //main section 
  for (let section of mainSection){
  section.classList.toggle("mainSectionReverse");
  }

  //footer
  footer.classList.toggle("footerReverse");

  //add a class to Suit Up Button
  suitUpBtn.classList.toggle("suitUpBtnReverse");


  // Change profile image source and button label based on the current mode
  if (document.body.classList.contains("darkMode")) {

    //Change button text;
    darkModeBtn.textContent = "☀ Light Mode";

    //change profile image
    for (let profile of profileImg) {   // Loop through all profile images
      profile.src = "images/profilepictureReverse.jpg"; // Set image for dark mode
    }
  } else {

    //Change button text;
    darkModeBtn.textContent = "☾ Dark Mode";

    for (let profile of profileImg) {
      profile.src = "images/profilepicture.jpg"; // Revert image to original
    }
  }

});


// --- SUIT UP FUNCTIONALITY ---
// Changes H1 text and profile image to a hero theme based on the current mode
suitUpBtn.addEventListener("click", function(){
//Check if is in darkMode - Batman
if(document.body.classList.contains("darkMode")){

// Batman theme for Dark Mode
if (h1.textContent.trim() == "Leonardo Jose Ambrosio") {
    h1.textContent = "I'm Batman!";
} else {
    h1.textContent = "Leonardo Jose Ambrosio";
}
//Change profile picture to a hero outfit - Batman
for(let heroimg of profileImg){
    if(heroimg.src.includes("images/profilepictureReverse.jpg")){
      heroimg.src = "images/LeoBatman.jpg";  
    }else{
        heroimg.src = "images/profilepictureReverse.jpg";
    }
}

}else{

// Superman theme for Light Mode  
if (h1.textContent.trim() == "Leonardo Jose Ambrosio") {
    h1.textContent = "I'm Superman!";
} else {
    h1.textContent = "Leonardo Jose Ambrosio";
}

//Change profile picture to a hero outfit - Superman
for(let heroimg of profileImg){
    if(heroimg.src.includes("images/profilepicture.jpg")){
      heroimg.src = "images/LeoSuperman.jpg";  
    }else{
        heroimg.src = "images/profilepicture.jpg";
    }
}
}

});


// --- FORM VALIDATION and FEEDBACK ---
// Validates user input and displays a personalized success message
sendBtn.addEventListener("click", function(event){
event.preventDefault()

// Basic validation for empty fields and email format
if(username.value.trim() == ""){
    alert("We need your name hero!");
    username.focus()
}
else if(email.value.trim() == ""){
    alert("We need your email hero!");
    email.focus();
}
else if(!email.value.includes("@")){
    alert("Invalid email hero!");
    email.focus();
}
else if(message.value.trim() == ""){
    alert("Type your message hero!");
    message.focus();
}
else{
    // Show the hidden 'thanks' message and insert the user's name
    thanksMessage.classList.add("thanks-style_show")

    thanksMessage.textContent = "Thank you my hero! " + username.value + ", we received your message."
    
    // Clear form fields after successful 'submission'
    username.value = "";
    email.value = "";
    message.value = "";
}
});