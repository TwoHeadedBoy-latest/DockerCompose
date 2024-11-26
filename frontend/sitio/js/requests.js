var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch('http://localhost:5000/getMyInfo', requestOptions)
  .then(res => {
    if (!res.ok) {
      alert("HTTP error! status:" + res.status);
    }
    return res.json();
  })
  .then(json => {
    document.getElementById("nombre").textContent = json.name + " " + json.lastname;
    document.getElementById("author").textContent = "2024 - Hecho por: " + json.author + ". Todos los derechos reservados.";
	  document.getElementById("facebookLink").href = "https://www.facebook.com/" + json.socialMedia.facebookUser;
    document.getElementById("gitlabUser").href = "https://www.gitlab.com/" + json.socialMedia.gitlabUser;
    document.getElementById("githubUser").href = "https://www.github.com/" + json.socialMedia.githubUser;
    document.getElementById("linkedinUser").href = "https://www.linkedin.com/in/" + json.socialMedia.linkedin;
  })
  .catch(error => alert("error: " + error));