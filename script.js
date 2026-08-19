function login() {

    const password = document.getElementById("password").value;

    const correctPassword = "123456";

    if (password === correctPassword) {

        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "index.html";

    } else {

        document.getElementById("message").textContent =
            "𝑪𝒊𝒂𝒍𝒍𝒐～(∠・ω< )⌒☆，密码是你生日哦";
    }
}