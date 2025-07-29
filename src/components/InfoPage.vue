<template>
  <div class="container">
    <div class="description">
      <p>Квиз состоит из 9 вопросов, разделённых по уровням сложности:</p>
      <ul>
        <li>Базовый: вопросы 1–3</li>
        <li>Средний: вопросы 4–6</li>
        <li>Продвинутый: вопросы 7–9</li>
      </ul>
    </div>

    <router-link to="/quiz">
      <button type="button" class="start-button">
        <img src="../assets/images/начать.png" alt="Начать квиз">
      </button>
    </router-link>
  </div>
</template>

<script setup>
</script>