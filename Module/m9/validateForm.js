function validateForm() {
    // Validation logic here
    let phoneInput = document.getElementById("phone");
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let addressInput = document.getElementById("address");
    let countryInput = document.getElementById("countries");
    let zipInput = document.getElementById("zipcode");
  
    // Validate Phone Number
    if (!/^\d+$/.test(phoneInput.value) || phoneInput.value.length > 15) {
      alert("Invalid Phone Number. Please enter only numerical values (maximum 15 digits).");
      return false;
    }
  
    // Validate Username
    if (usernameInput.value.length > 12) {
      alert("Username cannot exceed 12 characters.");
      return false;
    }
  
    // Validate Password
    if (passwordInput.value.length > 7) {
      alert("Password cannot exceed 7 characters.");
      return false;
    }
  
    // Validate Address
    if (addressInput.value.trim() === "") {
      alert("Address is required.");
      return false;
    }
  
    // Validate Country
    if (countryInput.value === "" || (countryInput.value === "United States" && zipInput.value.trim() === "")) {
      alert("Country and Zip Code are required.");
      return false;
    }
  
    function validateEmail() {
        var x = document.getElementById("email").value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
          alert("Not a valid e-mail address");
          return false;
        }
        return true;
      }
      
    return true;
  }