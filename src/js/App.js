import '../scss/App.scss';

document.getElementById('find').addEventListener("click", function() {
    this.classList.add("working")
    let url = "https://api.github.com/users/"
    var username = document.getElementById("username")
    url = url + username.value
    fetch(url).then((resp) => resp.json()).then((data) => {
      if (data.id != undefined) {
        document.getElementById("form").style.display = "none"
        document.getElementById("result").style.display = "block"
        document.getElementById('res_username').innerHTML = data.login
        document.getElementById('id').innerHTML = data.id
      } else {
        document.getElementById('find').classList.remove("working")
        document.getElementById('error').style.display = "block"
      }
    }).catch((error) => {
      console.log(error)
      document.getElementById('error').style.display = "block"
      document.getElementById('customError').innerHTML = " or " + error
    })
  }
)
