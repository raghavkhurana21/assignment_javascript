const token = localStorage.getItem('token')
console.log(token)
if (token === null) {
    window.location.replace("/login.html")
} else {
    fetch('https://reqres.in/api/users?page=1', {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
            "Content-Type": 'application/json',
        }
    }).then((response) => response.json())
        .then((result) => {
            console.log('result', result);
            let list = document.getElementById('divbody')

            result.data.forEach(element => {
                let div = document.createElement('div');
                div.setAttribute("id", "divcontain");

                list.append(div)

                let name = document.createElement('div');
                name.setAttribute('id', 'divname');
                name.innerText = element.first_name
                div.append(name)

                let email = document.createElement('div');
                email.setAttribute('email', 'divemail');
                email.innerText = element.email
                div.append(email)

                let avatar = document.createElement('img');
                avatar.setAttribute('id', 'divavatar');
                avatar.src = element.avatar
                div.append(avatar)
            });
        })
        .catch((error) => console.log('err', error));
}

function logout() {
    localStorage.clear();
    window.location.replace('/login.html')
}