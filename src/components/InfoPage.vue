<script setup>
</script>

<template>
  <div class="container">
    <div class="description">
      <p>Квиз состоит из 9 вопросов, разделённых по уровням сложности:</p>
      <ul>
        <li>Лёгкий: вопросы 1–3</li>
        <li>Средний: вопросы 4–6</li>
        <li>Сложный: вопросы 7–9</li>
      </ul>
    </div>

    <router-link to="/quiz">
      <button type="submit" class="start-button">
        <img src="../assets/images/начать.png" alt="Начать квиз">
      </button>
    </router-link>
  </div>
</template>

<style>
.description{
    max-width: 50vw;
    padding-top: 100px;
    padding-left: 60px;
    padding-bottom: 108px;
}
li{
    color: #ffffff;
    font-size: 36px;
    font-family: var(--font__family);
    margin: 30px;
}
</style>