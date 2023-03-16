
function login() {
    let loginForm = document.getElementById("loginForm")

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        if (email.value == "" || password.value == "") {
            alert("All Fields Required");
            return
        }


        const data = {
            email: email.value,
            password: password.value
        }

        // auth(data)
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            // mode: 'no-cors',
            headers: {
                "Content-Type": 'application/json',
            }
        }).then((response) => response.json())
            .then((result) => {
                console.log('result', result);
                localStorage.setItem('token', result.token);
                window.location.replace("/dashboard.html")
            })
            .catch((error) => console.log('err', error));
    });
}




