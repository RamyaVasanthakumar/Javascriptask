let signupButton = document.getElementById("submit");
signupButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event)

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    validateForm(firstName,lastName,email,password);
    //console.log(firstName.value,lastName.value,email.value,password.value

    function validateForm(...params) {
        let firstNameErr = document.getElementById("firstnameErr");
        let lastNameErr = document.getElementById("lastnameErr");
        let emailErr = document.getElementById("emailErr");
        let passwordErr = document.getElementById("passwordErr");
        let successMsg = document.getElementById("successMsg")
        
          if(firstName.value==""){
              firstNameErr.innerText = "please enter your firstname";
              firstNameErr.style.color = "red";
            }
          if(lastName.value==""){
             lastNameErr.innerText="please enter the lastname";
             lastNameErr.style.color="red";
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
        
    }


});
