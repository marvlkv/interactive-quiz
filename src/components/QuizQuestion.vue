<template>
  <div class="question-container">
    <h2 class="question-text">{{ question.text }}</h2>
    
    <div class="answers-grid">
      <button
        v-for="(answer, index) in question.answers"
        :key="index"
        class="answer-button"
        @click="selectAnswer(index)"
      >
        {{ answer.text }}
      </button>
    </div>
  </div>
</template>

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

<style scoped>
.question-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.question-text {
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: bold;
}

.answers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.answer-button {
  padding: 15px;
  font-size: 1rem;
  background-color: #ffd24c;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.answer-button:hover {
  background-color: #ffbf00;
}
</style>