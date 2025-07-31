<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

// 1. Получаем параметры из URL
const route = useRoute()
const router = useRouter()

const questions = [
  {
    text: 'Какой HTML-тег используется для вставки изображения?',
    answers: ['<imgsrc>', '<image>', '<img>', '<picture>']
  },
  {
    text: 'Как задать цвет текста в CSS?',
    answers: ['text-color:  cyan;', 'color: magenta;', 'font-color: yellow;', 'text-style: black;']
  },
  {
    text: 'Что вернет typeof null в LavaScript?',
    answers: ['null', 'undefined', 'boolean', 'object']
  },
  {
    text: 'Какой псевдокласс применяет стили при наведении курсора?',
    answers: [':hover', ':active', ':focus', ':visited']
  },
  {
    text: 'В чём основное отличие между reactive() и ref() во Vue 3?',
    answers: [
      'reactive() — для примитивов, ref() — для объектов',
      'reactive() — для объектов, ref() — для примитивов или любых значений',
      'ref() создаёт computed-свойства',
      'Они работают одинаково'
    ]
  },
  {
    text: 'Как можно передать данные из родительского компонента в дочерний во Vue?',
    answers: ['Используя v-export', 'Через событие emit', 'С помощью свойства props', 'Через глобальную переменную']
  },
  {
    text: 'Что делает директива v-bind?',
    answers: [
      'Запускает метод',
      'Создаёт ссылку на компонент',
      'Добавляет стили к элементу',
      'Привязывает значение к атрибуту'
    ]
  },
  {
    text: 'Что делает функция provide/inject в Vue?',
    answers: [
      'Позволяет компонентам обмениваться данными, минуя props и emit',
      'Управляет жизненным циклом компонента',
      'Регистрирует глобальные компоненты',
      'Устанавливает локальные стили компонента'
    ]
  },
  {
    text: 'Когда вызывается хук onUnmounted?',
    answers: [
      'При загрузке страницы',
      'После первого рендера компонента',
      'Когда компонент удаляется из DOM',
      'При изменении props'
    ]
  }
]

// 2. Безопасное преобразование параметров в ref-массивы
const userAnswers = ref([])
const correctAnswers = ref([])

try {
  userAnswers.value = JSON.parse(route.query.userAnswers)
} catch {
  userAnswers.value = []
}
try {
  correctAnswers.value = JSON.parse(route.query.correctAnswers)
} catch {
  correctAnswers.value = []
}
</script>

<template>
  <div class="answers-container">
    <div class="container">
      <h1>Ваши ответы:</h1>

      <div
        v-for="(question, index) in questions"
        :key="index"
        class="answer-block"
      >
        <h3>Вопрос {{ index + 1 }}: {{ question.text }}</h3>

        <p v-if="correctAnswers.value[index] !== undefined">
          ✅ Правильный ответ:
          <strong>{{ question.answers[correctAnswers.value[index]] }}</strong>
        </p>

        <p
          v-if="userAnswers.value[index] !== undefined"
          :class="{
            correct: userAnswers.value[index] === correctAnswers.value[index],
            incorrect: userAnswers.value[index] !== correctAnswers.value[index]
          }"
        >
          🟡 Ваш ответ:
          <strong>{{ question.answers[userAnswers.value[index]] }}</strong>
        </p>
      </div>

      <router-link to="/">
        <button>Пройти снова</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.answers-container {
  text-align: center;
  color: #fff;
}
.answer-block {
  margin: 20px auto;
  padding: 15px;
  border-bottom: 1px solid #4da0ff;
  max-width: 800px;
}
.correct {
  color: #00ff88;
}
.incorrect {
  color: #ff5555;
}
button {
  margin-top: 40px;
  font-size: 1.2rem;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: #163a91;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #081961;
}
</style>