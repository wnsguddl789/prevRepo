<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <router-link class="nav-link" to='/'>
    <img class="navbar-brand" src="../../assets/logo.png" width="80">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></router-link>
        </li>
        <!-- board link -->
        <li class="nav-item">
          <router-link class="nav-link" to='/board/read'>Board</router-link>
        </li>
        
        <!-- user link -->
        <li class="nav-item">
          <router-link class="nav-link" to='/user/signin'>Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to='/user/signup'>Sign Up</router-link>
        </li>
        
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
</script>

<style>
</style>