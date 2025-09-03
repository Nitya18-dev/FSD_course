document.querySelector("#searchBtn").addEventListener("click", getUser);

async function getUser() {
  let username = document.querySelector("#usernameInput").value;
  let error = document.querySelector("#error");
  let card = document.querySelector("#card");

  if (username === "") {
    alert("Please enter username!");
    return;
  }

  username.innerHTML = "";
  let response = await fetch("https://api.github.com/users/" + username);
  let data = await response.json();
  console.log(data);

  document.querySelector("#avatar").setAttribute("src", data.avatar_url);
  document.querySelector("#name").innerHTML = data.name || "No name";
  document.querySelector("#login").innerHTML = data.login;
  document.querySelector("#repos").innerHTML = data.public_repos;
  document.querySelector("#followers").innerHTML = data.followers;
  document.querySelector("#following").innerHTML = data.following;
  document.querySelector("#profileLink").setAttribute("href", data.html_url);

  card.style.display = "block";
}
