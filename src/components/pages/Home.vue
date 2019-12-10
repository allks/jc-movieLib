<template lang="pug">
  .content-wrapper
    section
      .container
        .task-wrapper
          input(
            v-model="taskTitle"
            type="text"
            class="task-title"
            placeholder="Что нового посмотрел?"
            @keyup.enter="newTask"
          )
          textarea(
            v-model="taskDescription"
            type="text"
            class="task-description"
            placeholder="Добавь описание"
            @keyup.enter="newTask"
          )
        .option-list
          input.what-watch(
            v-model="whatWatch"
            type="radio"
            id="radioFilm"
            value="Фильм"
          )
          label(
            for="radioFilm"
          ) Фильм
          input.what-watch(
            v-model="whatWatch"
            type="radio"
            id="radioSerial"
            value="Сериал"
          )
          label(
            for="radioSerial"
          ) Сериал
        .total-time
          .total-time__film(
            v-if="whatWatch === 'Фильм'"
          )
            span.time-title Часа
            input.time-input(
              v-model="filmHours"
              type="number"
            )
            span.time-title Минут
            input.time-input(
              v-model="filmMinutes"
              type="number"
            )
            p {{ filmTime }}
          .totla-time__serial(
            v-if="whatWatch === 'Сериал'"
          )
            span.time-title Сколько сезонов?
            input.time-input(
              v-model="serialSeason"
              type="number"
            )
            span.time-title Сколько серий?
            input.time-input(
              v-model="serialSeries"
              type="number"
            )
            span.time-title Какой продолжительности серия? (минут)
            input.time-input(
              v-model="serialSeriesMinutes"
              type="number"
            )
            p {{ serialTime }}
        .tag-list
          .tag-wrapper(
            v-for="tag in tags"
            :key="tag.title"
          )
            .tag(
              @click="addTagUsed(tag)"
              :class="{active: tag.use}"
            )
              span.tag-title {{ tag.title }}
              span.btn-close &times;
            p {{ tagsUsed }}
</template>

<script>
export default {
  data() {
    return {
      taskTitle: '',
      taskDescription: '',
      taskId: 3,
      whatWatch: 'Фильм',
      // Total Time
      // Film
      filmHours: 1,
      filmMinutes: 30,
      // Serial
      serialSeason: 1,
      serialSeries: 11,
      serialSeriesMinutes: 40,
      tagsUsed: [],
      tags: [
        {
          title: 'Комедия',
          use: false,
        },
        {
          title: 'Ужасы',
          use: false,
        },
        {
          title: 'Приключения',
          use: false,
        },
      ],
    };
  },
  methods: {
    newTask() {
      if (this.taskTitle === '') {
        return;
      }
      let time;
      if (this.whatWatch === 'Фильм') {
        time = this.filmTime;
      } else {
        time = this.serialTime;
      }
      const task = {
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        time,
        completed: false,
        editing: false,
      };
      console.log(task);
      this.taskId += 1;
      this.taskTitle = '';
      this.taskDescription = '';
    },
    addTagUsed(tag) {
      tag.use = !tag.use;
      if (tag.use) {
        this.tagsUsed.push(
          tag.title,
        );
      } else {
        this.tagsUsed.splice(tag.title, 1);
      }
    },
    getHoursAndMinutes(minutes) {
      const hours = Math.trunc(minutes / 60);
      const min = minutes % 60;
      return `${hours} Ч. ${min} Мин.`;
    },
  },
  computed: {
    filmTime() {
      const min = (this.filmHours * 60) + (this.filmMinutes * 1);
      return this.getHoursAndMinutes(min);
    },
    serialTime() {
      const min = this.serialSeason * this.serialSeries * this.serialSeriesMinutes;
      return this.getHoursAndMinutes(min);
    },
  },
};
</script>

<style lang="scss" scoped>
.task-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.task-title,
.task-description{
  width: 450px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: Arial;
  font-size: 14px;
  padding: 5px;
}

.task-title{
  height: 20px;
  margin-bottom: 10px;
}

.task-description{
  height: 70px;
  resize: none;
}

.option-list,
.total-time,
.tag-list{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tag{
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  height: 20px;
  line-height: 20px;
}

.btn-close{
  display: inline-block;
  background-color: #b7504c;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
  &:hover{
    background-color: darken(#b7504c, 7);
  }
}
</style>
