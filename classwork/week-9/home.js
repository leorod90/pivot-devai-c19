if (window.location.pathname.includes("home.html")) {
  // get everything after ?
  const params = new URLSearchParams(window.location.search);
  // look for the one called "email"
  const email = params.get("email");

  document.getElementById("welcomeMessage").textContent = email;
}


// if were on the home screen 
// get the variable(parameter) from url 
// display it on our page