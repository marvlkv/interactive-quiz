<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['answerSelected'])

function selectAnswer(index) {
  emit('answerSelected', index)
}
</script>

<template>
  <div class="question-container">
    <h2 class="question-text">{{ question.text }}</h2>
    <div class="answers-grid">
      <button
      v-for="(answer, index) in question.answers"
      :key="index"
      class="answer-button"
      @click="selectAnswer(index)">
      {{ answer.text }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
.question-text {
  margin-bottom: 50px;
  margin-top: 70px;
  font-size: 45px;
  font-weight: normal;
  color: #fff;
  font-family: var(--font__family);
}
.answers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.answer-button {
  padding: 15px;
  font-size: 25px;
  background-color: #163A91;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #fff;
  font-family:var(--font__family);
}
.answer-button:hover {
  background-color: #081961;
}
</style>