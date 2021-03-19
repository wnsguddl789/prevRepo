<template>
  <header>
    <div class="menuWrap">
      <ul class="menu">
        <li><img src="../../assets/logo.png" width="80"></li>
        <li><a href="">Menu_1</a></li>
        <li><a href="">Menu_2</a></li>
        <li><a href="">Menu_3</a></li>
        <li><a href="">Menu_4</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
</script>

<style>
  header{
    width: 100%;
    padding: 10px 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
  header ul.menu{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  header ul.menu li {
    align-content: center;
    padding: 10px 20px;
  }
  a{
    color: #333;
    text-decoration: none;
  }
</style>