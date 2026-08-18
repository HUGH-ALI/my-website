function showMessage() {
    alert("欢迎来到我的个人网站！");
}

function goToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}