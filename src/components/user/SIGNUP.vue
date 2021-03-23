<template>
  <form>  
    <div class="container-fluid text-center">
        <form class="form-signin">
          
          <h1 class="h3 mb-3 font-weight-normal">Please sign Up</h1>
          <label for="email" style="float:left"><b>Email</b></label>
          <input class="form-control" type="text" placeholder="Enter Email" name="email" required>

          <label for="psw" style="float:left"><b>Password</b></label>
          <input class="form-control" type="password" placeholder="Enter Password" name="psw" required>

          <label for="psw-repeat" style="float:left"><b>Repeat Password</b></label>
          <input class="form-control" type="password" placeholder="Repeat Password" name="psw-repeat" required>
          <label style="float:left">
            <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
          </label>
          <button class="btn btn-lg btn-secondary btn-block" type="submit">Cancel</button>
          <button class="btn btn-lg btn-dark btn-block" type="submit">Sign Up</button>
        </form>
    </div>
</form>
</template>

<script>
export default {

}
</script>

<style>
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
</style>