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
            type="radio"
            id="radioFilm"
            value="Фильм"
            v-model="whatWatch"
          )
          label(
            for="radioFilm"
          ) Фильм
          input.what-watch(
            type="radio"
            id="radioSerial"
            value="Сериал"
            v-model="whatWatch"
          )
          label(
            for="radioSerial"
          ) Сериал
        .total-time
          .total-time__film(
            v-if="whatWatch === 'Фильм'"
          )
            span Total Film Times
          .totla-time__serial(
            v-if="whatWatch === 'Сериал'"
          )
            span Total Serial Times
        .tag-list
          .tag
            span.tag-title TAG
            span.btn-close &times;
    section
      .container
        .task-list
          .task-item(
            v-for="task in tasks"
            :key="task.id"
            :class="{ completed: task.completed }"
          )
            .task-item__info
              span.task-item__label {{ task.whatWatch }}
              span.task-item__time Total Time:
              span.task-item__remove удалить
            .task-item__content
              .task-item__header
                input.task-item__checkbox(
                  type="checkbox"
                  v-model="task.completed"
                )
                span.task-item__title {{ task.title }}
              .task-item__body
                p.task-item__description {{ task.description }}
</template>

<script>
export default {
  data() {
    return {
      taskTitle: '',
      taskDescription: '',
      taskId: 3,
      whatWatch: 'Фильм',
      tasks: [
        {
          id: 1,
          title: 'Ex nostrud exercitation voluptate nulla ullamco amet exercitation consectetur ut.',
          description: 'Aliquip pariatur voluptate aute sunt sit velit enim. Tempor ex mollit laborum duis esse elit et minim occaecat ut consectetur ea exercitation. Laborum culpa et anim eiusmod in ex commodo deserunt exercitation. Ex culpa voluptate proident enim cupidatat eiusmod eiusmod enim ex magna eu et sint magna.',
          whatWatch: 'Фильм',
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: 'Excepteur quis eu sint cupidatat ut commodo ut Lorem dolore.',
          description: 'Amet est duis do ut aliquip exercitation amet enim non ullamco cupidatat aliqua minim sint. Aliquip et labore dolor labore in anim aute aliquip irure ut. Anim sit cupidatat exercitation non eu minim nostrud enim in officia ut aute. Aute enim aute in magna anim aliquip aliquip anim elit voluptate laborum. Consectetur laborum sint anim ullamco anim. Minim mollit reprehenderit sit veniam amet sit sit. Nisi nostrud magna aliquip labore cillum.',
          whatWatch: 'Сериал',
          completed: false,
          editing: false,
        },
      ],
    };
  },
  methods: {
    newTask() {
      if (this.taskTitle === '') {
        return;
      }
      this.tasks.push({
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        completed: false,
        editing: false,
      });
      this.taskId += 1;
      this.taskTitle = '';
      this.taskDescription = '';
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

.task-list{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-item{
  border: 1px solid #ccc;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 650px;
  &__info{
    display: flex;
  }
  &__label{
    background-color: #ccc;
    display: inline-block;
    min-width: 70px;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
    padding: 0 5px;
    line-height: 30px;
    text-align: center;
  }
  &__time{
    line-height: 40px;
  }
  &__remove{
    margin: 10px;
    margin-left: auto;
    background-color: #b7504c;
    width: 70px;
    height: 25px;
    border-radius: 5px;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    &:hover{
      background-color: darken(#b7504c, 7);
    }
  }
  &__header{
    margin-bottom: 10px;
  }
  &__body{
    margin-left: 20px;
  }
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
  font-size: px;
}
</style>
