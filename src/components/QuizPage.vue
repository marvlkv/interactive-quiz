<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import QuizQuestion from './QuizQuestion.vue'

// Массив вопросов
const questions = ref([
  {
    text: 'Какой HTML-тег используется для вставки изображения?',
    answers: [
      { text: '<imgsrc>', isCorrect: false },
      { text: '<image>', isCorrect: false },
      { text: '<img>', isCorrect: true },
      { text: '<picture>', isCorrect: false }
    ]
  },
  {
    text: 'Как задать цвет текста в CSS?',
    answers: [
      { text: 'text-color:  cyan;', isCorrect: false },
      { text: 'color: magenta;', isCorrect: true },
      { text: 'font-color: yellow;', isCorrect: false },
      { text: 'text-style: black;', isCorrect: false }
    ]
  },
  {
    text: 'Что вернет typeof null в LavaScript?',
    answers: [
      { text: 'null', isCorrect: false },
      { text: 'undefined', isCorrect: false },
      { text: 'boolean', isCorrect: false },
      { text: 'object', isCorrect: true }
    ]
  },
  {
    text: 'Какой псевдокласс применяет стили при наведении курсора?',
    answers: [
      { text: ':hover', isCorrect: true },
      { text: ':active', isCorrect: false },
      { text: ':focus', isCorrect: false },
      { text: ':visited', isCorrect: false }
    ]
  },
  {
    text: 'В чём основное отличие между reactive() и ref() во Vue 3?',
    answers: [
      { text: 'reactive() — для примитивов, ref() — для объектов', isCorrect: false },
      { text: 'reactive() — для объектов, ref() — для примитивов или любых значений', isCorrect: true },
      { text: 'ref() создаёт computed-свойства', isCorrect: false },
      { text: 'Они работают одинаково', isCorrect: false }
    ]
  },
  {
    text: 'Как можно передать данные из родительского компонента в дочерний во Vue?',
    answers: [
      { text: 'Используя v-export', isCorrect: false },
      { text: 'Через событие emit', isCorrect: false },
      { text: 'С помощью свойства props', isCorrect: true },
      { text: 'Через глобальную переменную', isCorrect: false }
    ] 
  },
  {
    text: 'Что делает директива v-bind?',
    answers: [
      { text: 'Запускает метод', isCorrect: false },
      { text: 'Создаёт ссылку на компонент', isCorrect: false },
      { text: 'Добавляет стили к элементу', isCorrect: false },
      { text: 'Привязывает значение к атрибуту', isCorrect: true }
    ]
  },
  {
    text: 'Что делает функция provide/inject в Vue?',
    answers: [
      { text: 'Позволяет компонентам обмениваться данными, минуя props и emit', isCorrect: true },
      { text: 'Управляет жизненным циклом компонента', isCorrect: false },
      { text: 'Регистрирует глобальные компоненты', isCorrect: false },
      { text: 'Устанавливает локальные стили компонента', isCorrect: false }
    ]
  },
  {
    text: 'Когда вызывается хук onUnmounted?',
    answers: [
      { text: 'При загрузке страницы', isCorrect: false },
      { text: 'После первого рендера компонента', isCorrect: false },
      { text: 'Когда компонент удаляется из DOM', isCorrect: true },
      { text: 'При изменении props', isCorrect: false }
    ]
  }
])

const currentIndex = ref(0)
const score = ref(0)
const router = useRouter()

const currentQuestion = computed(() => {
  return questions.value[currentIndex.value]
})

function handleAnswer(selectedIndex) {
  const selected = currentQuestion.value.answers[selectedIndex]
  if (selected.isCorrect) {
    score.value++
  }

  if (currentIndex.value + 1 < questions.value.length) {
    currentIndex.value++
  } else {
    // Переход на страницу результатов
    router.push({
      path: '/result',
      query: { score: score.value, total: questions.value.length }
    })
  }
}
</script>

<template>
  <div class="container">
  <div class="quiz-page">
    <div class="progress">
      Вопрос {{ currentIndex + 1 }} из {{ questions.length }}
    </div>
    <QuizQuestion
      v-if="currentQuestion"
      :question="currentQuestion"
      @answerSelected="handleAnswer"
    />
  </div>
  </div>
</template>

<style scoped>
.quiz-page {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress {
  margin-top: 30px;
  font-size: 1.1rem;
  color: #2a98d4;
  font-size: 30px;
  font-family: var(--font__family);
}
</style>