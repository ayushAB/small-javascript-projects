
let profile_name = document.getElementById("name");
let bio = document.getElementById("bio");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let repos = document.getElementById("repos");
let profile_image = document.getElementById("profile_image");

function getGithubProfile(){
    const username = document.getElementById('username').value;
    fetch(`https://api.github.com/users/${username}`)
  .then(response =>response.json())
  .then(data => {
    profile_name.innerHTML = data.name;
    bio.innerHTML = data.bio;
    profile_image.src = data.avatar_url;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;
    repos.innerHTML = data.public_repos;
  });
}

getGithubProfile();
