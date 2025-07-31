<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const score = Number(route.query.score)
const total = Number(route.query.total)

const feedback = computed(() => {
  const messages = {
    0: {
      title: "Начало пути",
      text: "Всё ок, с чего-то ведь начинают. Сейчас это выглядит как провал, но на самом деле — просто точка старта. Посмотри материалы ещё раз — и вперед к новым попыткам."
    },
    1: {
      title: "Первая искра",
      text: "Одна правильная — уже что-то! Это значит, ты уже где-то слышал про эти технологии. Осталось лишь освежить знания и попробовать ещё раз — результат быстро пойдёт вверх."
    },
    2: {
      title: "Начало положено",
      text: "Видно, что база начинает формироваться. Не спеши, разберись с непонятным — и следующая попытка точно будет лучше."
    },
    3: {
      title: "Пробуждение разработчика",
      text: "Уже ближе к половине, хороший темп. Ошибки — не беда, они показывают, где ещё можно подтянуть. Продолжай — и всё получится."
    },
    4: {
      title: "Есть потенциал!",
      text: "Почти половина — значит, ты уже уверенно держишься на плаву. Осталось немного упорядочить знания и закрепить важное."
    },
    5: {
      title: "Середнячок с амбициями",
      text: "Уверенная середина. Местами промахнулся, но видно, что в теме. Хороший момент, чтобы ещё раз пройтись по материалу и попробовать снова."
    },
    6: {
      title: "Твёрдая база",
      text: "Это уже серьёзно. Понимание есть, остаются лишь детали. Ещё чуть-чуть — и будешь чувствовать себя уверенно в любой теме."
    },
    7: {
      title: "Почти эксперт",
      text: "Отличный результат. Всего пара неточностей, и будет максимум. Видно, что ты разобрался — осталось только довести до идеала."
    },
    8: {
      title: "На грани совершенства",
      text: "Совсем немного не хватило. Посмотри, где допустил ошибку — и попробуй ещё раз. Такой уровень — это уже почти топ."
    },
    9: {
      title: "Мастер фронтенда",
      text: "Вот это уровень. Всё чётко, уверенно, по делу. Продолжай в том же духе — и дальше будет только круче."
    }
  }
  return messages[score] ?? { title: "Результат", text: "Молодец, продолжай учиться!" }
})
</script>

<template>
  <div class="result-container">
    <div class="container">
      <div class="result">
        <img src="../assets/images/результат.png" alt="">
      </div>
      <p>Вы набрали {{ score }} из {{ total }} баллов!</p>
      <p style="font-size: 60px; color: #fff;">{{ feedback.title }}</p>
      <p style="padding: 15px; max-width: 700px; margin: 0 auto;">{{ feedback.text }}</p>
      <router-link to="/">
        <button>
          <img src="../assets/images/Пройти снова.png" alt="">
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  text-align: center;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  background-color: #163A91;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  padding-top: 12px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 60px;
  transition: background-color 0.3s ease;
}
button:hover{
  background-color: #081961;
}
p{
  margin: 10px;
  padding-top: 40px;
  font-size: 30px;
  color: #bde6ff;
}
.result{
  padding-top: 110px;
}
</style>