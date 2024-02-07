 let log = document.querySelector("#logout");

 if (localStorage.getItem("login") === null) {   
  log.innerHTML = "Log In";
  log.addEventListener("click", () => {
    window.location.replace("./main-login.html");
  });
} else {
  log.innerHTML = "Log Out";
  log.addEventListener("click", () => {
    localStorage.removeItem("login");
    window.location.replace("./main-login.html");
  }); }