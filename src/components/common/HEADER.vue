<template>
  <div>
    <div class="header">
      <ul class="header__lists">
        <li class="header__list">회원가입</li>
        <li class="header__list">로그인</li>
        <li class="header__list">게시판</li>
        <li class="header__list">info</li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #adcb9a;
    padding: 25px;
    display: flex;
    justify-content: center;
  }
  .header ul{
    list-style:none;
  }
  .header li{
    font-weight: 600;
    font-size: 30px;
  }
</style>