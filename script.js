// Insecure Comment Handling (XSS Vulnerability)
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let comment = document.getElementById('comment').value;
  
    // This is unsafe, and would allow XSS if the comment includes <script> tags
    document.body.innerHTML += <p>${comment}</p>;
  });
  
  // Insecure Authentication (Insecure login form, no encryption)
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // In a real scenario, passwords should never be handled like this
    console.log(Attempted login with username: ${username} and password: ${password});
  });