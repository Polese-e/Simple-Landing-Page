const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");

document.getElementById("form-btn").addEventListener("click", (ev) => {
  ev.preventDefault();

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const messege = document.getElementById("messege");

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  messege.value = "";

  return;
});
