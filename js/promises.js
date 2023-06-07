const search = document.querySelector("#search-button");

search.addEventListener("click", function (e) {
  e.preventDefault();
  let searchVal = document.querySelector("#search-bar").value;
  let name = searchVal.split(" ").join("");


  fetch("https://api.github.com/users/" + name + "/events/public", {
    headers: { Authorization: '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'},
  }).then((response) =>
    response.json().then((user) => {
        console.log(user);
        let loginDate = new Date(user[0].created_at)
        $('#result').html(`<h3 class="text-center">${user[0].actor.display_login.toUpperCase()}'s last commit was ${loginDate.toString()}</h3><h3 class="text-center"></h3>`)
        $('#link').attr('href',  `https://github.com/${name}`)
    })
  );
});






function wait(num){

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve()
        }, num)

    })
}

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
