<template>
  <form action="/action_page.php" style="border:1px solid #ccc">
  <div class="container">
    <h1 >Sign Up</h1>
    <p style="border-bottom:1px solid rgba(0,0,0,0.3)">Please fill in this form to create an account.</p>
    <hr >
    
    <label for="email" style="float:left"><b>Email</b></label>
    <input class="form-control" type="text" placeholder="Enter Email" name="email" required>

    <label for="psw" style="float:left"><b>Password</b></label>
    <input class="form-control" type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat" style="float:left"><b>Repeat Password</b></label>
    <input class="form-control" type="password" placeholder="Repeat Password" name="psw-repeat" required>
    
    <label style="float:left">
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>
    
    <p style="float:left">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="btn btn-danger btn-block">Cancel</button>
      <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
    </div>
  </div>
</form>
</template>

<script>
export default {

}
</script>

<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}


hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity:1;
}
/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>