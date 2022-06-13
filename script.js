const button = document.getElementById("changeTheme");
button.addEventListener("click", changeTheme);

function changeTheme() {
  const div = document.querySelector('.content');
  div.classList.toggle("day");
  div.classList.toggle("night");
  console.log(button.firstChild);
  button.firstChild.classList.toggle("fa-sun");
  button.firstChild.classList.toggle("fa-moon");
}

