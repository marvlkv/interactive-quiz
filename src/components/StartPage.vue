<script setup>
</script>

<template>
  <div class="container">
    <div class="subtitle">
      <img src="../assets/images/Интерактивный квиз.png" alt="Интерактивный квиз">
    </div>
    <div class="name">
      <img src="../assets/images/на стилях и скриптах.png" alt="Название квиза">
    </div>
    <router-link to="/info">
      <button type="submit" class="start-button">
        <img src="../assets/images/начать.png" alt="Начать">
      </button>
    </router-link>
  </div>
</template>

<style>
.subtitle{
    text-align: center;
    padding-top: 120px;
}
.name{
    text-align: center;
    margin: 100px;
    margin-bottom: 170px;
}
</style>