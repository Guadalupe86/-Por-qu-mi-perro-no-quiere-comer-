document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "block";
    
    setTimeout(() => {
        errorMessage.style.display = "none";
    }, 3000);
});
