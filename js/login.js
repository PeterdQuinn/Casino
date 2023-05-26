// login.js
window.addEventListener('DOMContentLoaded', (event) => {
    const toggleMode = document.getElementById('toggleMode');
    toggleMode.addEventListener('change', function() {
        if (toggleMode.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
