let loginButton = document.getElementById("submit");
loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event)

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    validateLoginForm(email,password);
    //console.log(email.value,password.value)

    function validateLoginForm(...params) {
        let emailErr = document.getElementById("emailErr");
        let passwordErr = document.getElementById("passwordErr");
        let successMsg = document.getElementById("successMsg")
        
          }if(email.value==""){
              emailErr.innerText="Please enter emailId";
              emailErr.style.color="red";
          }if(password.value==""){
            passwordErr.innerText="Please enter password";
            passwordErr.style.color="red";
          }else{
            successMsg.innerText="your response was successfully submitted"
            successMsg.style.color="orange"

          }
        
    });
