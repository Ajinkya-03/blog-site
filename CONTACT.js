let cnt_name = document.querySelector("#cnt-name");
let cnt_email = document.querySelector("#cnt-email");
let cnt_mobile = document.querySelector("#cnt-mobile");
let cnt_query = document.querySelector("#cnt-query");
let cnt_button = document.querySelector("#cnt-button");

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
   });
 }

//push data
let info = [];

cnt_button.addEventListener("click", () => {
  let newinfo = {
    name: cnt_name.value,
    email: cnt_email.value,
    mobile: cnt_mobile.value,
    query: cnt_query.value,
  };

  if (cnt_name.value == "" || cnt_email.value == ""|| cnt_mobile.value =="" || cnt_query.value == "") {
    toasterdanger("Fill out all the fields");
    return false;
  }

  let info = localStorage.getItem("contact");
  info = info === null ? [] : JSON.parse(info);

  info.push(newinfo);
  console.log(info);

  localStorage.setItem("contact", JSON.stringify(info));
  toastersuccess("We'll reach you out soon");

  cnt_name.value = "";
  cnt_email.value = "";
  cnt_mobile = "";
  cnt_query.value = "";
});
























// let cnt_name = document.querySelector("#cnt-name");
// let cnt_email = document.querySelector("#cnt-email");
// let cnt_mobile = document.querySelector("#cnt-mobile");
// let cnt_query = document.querySelector("#cnt-query");
// let cnt_button = document.querySelector("#cnt-button");

// let log = document.querySelector("#logout");

// if (localStorage.getItem("login") === null) {
//   log.innerHTML = "Log In";
//   log.addEventListener("click", () => {
//     window.location.replace("./write-blog.html");
//   });
// } else {
//   log.innerHTML = "Log Out";
//   log.addEventListener("click", () => {
//     localStorage.removeItem("login");
//     window.location.replace("./main-login.html");
//   });
// }

// let info = [];

// cnt_button.addEventListener("click", () => {
//   info.push({
//     name: cnt_name.value,
//     mobile:cnt_mobile.value,
//     email: cnt_email.value,
//     query: cnt_query.value,
//   });
//   console.log(info);
//   cnt_name.value = "";
//   cnt_mobile.value="";
//   cnt_email.value = "";
//   cnt_query.value = "";

//   // FOR LOGOUT

//   // let log = document.querySelector("#logout");

// // if (localStorage.getItem("login") === null) {
// //   log.innerHTML = "Log In";
// //   log.addEventListener("click", () => {
// //     window.location.replace("./write-blog.html");
// //   });
// // } 
//  {
//   log.innerHTML = "Log Out";
//   log.addEventListener("click", () => {
//     localStorage.removeItem("login");
//     window.location.replace("./main-login.html");
//   });
// }
// });
