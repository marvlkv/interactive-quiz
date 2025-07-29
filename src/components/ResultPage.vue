
<template>
  <div class="result-container">
    <h2>Результат</h2>
    <p>Вы набрали {{ score }} из {{ total }} баллов!</p>
    <router-link to="/">
      <button>Пройти снова</button>
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const score = route.query.score
const total = route.query.total
</script>

<style scoped>
.result-container {
  text-align: center;
  margin-top: 100px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background-color: #ffd24c;
  border-radius: 8px;
  cursor: pointer;
}
</style>
