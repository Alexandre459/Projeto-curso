const user = document.querySelector('.usuario');

window.onload = () => {
    user.innerHTML = localStorage.getItem('Usuario');

    user()
}